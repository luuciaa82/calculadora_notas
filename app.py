"""
=============================================================
  CALCULADORA DE ÍNDICE ACADÉMICO - UTP PANAMÁ
  Desarrollado con Flask (Python) + HTML/CSS/JS

  SEGURIDAD APLICADA:
  - Rate limiting: máximo de peticiones por IP
  - Cabeceras HTTP de seguridad (anti-clickjacking, XSS, etc.)
  - Validación estricta de todos los inputs
  - Límite de materias por petición
  - Límite de tamaño del JSON entrante
  - Sanitización de texto (nombre de materia)
=============================================================
"""

# ── Importaciones ─────────────────────────────────────────────────────────────
from flask import Flask, render_template, request, jsonify
from functools import wraps
import time
import re

# ── Creación de la app ────────────────────────────────────────────────────────
app = Flask(__name__)

# ── Límite de tamaño máximo del body de la petición (16 KB) ──────────────────
# Evita que alguien envíe un JSON gigante para saturar la memoria del servidor.
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024  # 16 KB máximo


# ══════════════════════════════════════════════════════════════════════════════
#  RATE LIMITING — Protección contra abuso y ataques de fuerza bruta
#  Limita cuántas peticiones puede hacer una misma IP en un período de tiempo.
#  Implementado manualmente (sin librería externa) para simplicidad.
# ══════════════════════════════════════════════════════════════════════════════

# Diccionario en memoria: { "ip": [timestamp1, timestamp2, ...] }
# Guarda el historial de peticiones por IP
historial_peticiones = {}

# Configuración del rate limit
LIMITE_PETICIONES = 30   # máximo de peticiones permitidas...
VENTANA_SEGUNDOS  = 60   # ...dentro de este período (1 minuto)


def rate_limit(f):
    """
    Decorador que aplica rate limiting a una ruta Flask.
    Si una IP supera el límite, devuelve error 429 (Too Many Requests).
    Se coloca con @rate_limit encima de cualquier ruta que queramos proteger.
    """
    @wraps(f)
    def decorador(*args, **kwargs):
        # Obtener la IP real del cliente
        # X-Forwarded-For es el header que usa Render/proxies para pasar la IP real
        ip = request.headers.get("X-Forwarded-For", request.remote_addr)
        if ip and "," in ip:
            ip = ip.split(",")[0].strip()  # Tomar solo la primera IP si hay varias

        ahora = time.time()

        # Inicializar historial para esta IP si es la primera vez
        if ip not in historial_peticiones:
            historial_peticiones[ip] = []

        # Limpiar peticiones antiguas fuera de la ventana de tiempo
        historial_peticiones[ip] = [
            t for t in historial_peticiones[ip]
            if ahora - t < VENTANA_SEGUNDOS
        ]

        # Verificar si superó el límite
        if len(historial_peticiones[ip]) >= LIMITE_PETICIONES:
            return jsonify({
                "error": "Demasiadas peticiones. Espera un momento antes de continuar."
            }), 429  # HTTP 429 = Too Many Requests

        # Registrar esta petición
        historial_peticiones[ip].append(ahora)

        return f(*args, **kwargs)
    return decorador


# ══════════════════════════════════════════════════════════════════════════════
#  CABECERAS DE SEGURIDAD HTTP
#  Se aplican automáticamente a TODAS las respuestas del servidor.
#  Protegen contra los ataques más comunes del navegador.
# ══════════════════════════════════════════════════════════════════════════════

@app.after_request
def agregar_cabeceras_seguridad(response):
    """
    Este hook se ejecuta después de cada respuesta.
    Agrega cabeceras HTTP que le dicen al navegador cómo protegerse.
    """

    # Evita que la página se cargue dentro de un <iframe> (anti-clickjacking)
    response.headers["X-Frame-Options"] = "DENY"

    # Evita que el navegador "adivine" el tipo de contenido (anti-MIME sniffing)
    response.headers["X-Content-Type-Options"] = "nosniff"

    # Activa el filtro XSS del navegador (capa extra de protección)
    response.headers["X-XSS-Protection"] = "1; mode=block"

    # Política de seguridad de contenido:
    # Solo permite cargar recursos del mismo dominio + Google Fonts
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
        "font-src https://fonts.gstatic.com; "
        "script-src 'self' 'unsafe-inline'; "
        "connect-src 'self';"
    )

    # Fuerza HTTPS: el navegador no permitirá conexiones HTTP por 1 año
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"

    # No enviar la URL de referencia a otros sitios (privacidad)
    response.headers["Referrer-Policy"] = "no-referrer"

    # Deshabilitar características del navegador innecesarias
    response.headers["Permissions-Policy"] = "geolocation=(), microphone=(), camera=()"

    return response


# ══════════════════════════════════════════════════════════════════════════════
#  TABLA DE CALIFICACIONES UTP
# ══════════════════════════════════════════════════════════════════════════════

TABLA_CALIFICACIONES = [
    {"min": 91, "max": 100, "letra": "A", "puntos": 3, "descripcion": "Excelente"},
    {"min": 81, "max": 90,  "letra": "B", "puntos": 2, "descripcion": "Bueno"},
    {"min": 71, "max": 80,  "letra": "C", "puntos": 1, "descripcion": "Regular"},
    {"min": 61, "max": 70,  "letra": "D", "puntos": 0, "descripcion": "Deficiente"},
    {"min": 0,  "max": 60,  "letra": "F", "puntos": 0, "descripcion": "Reprobado"},
]


def obtener_letra_y_puntos(nota: float) -> dict:
    """Convierte una nota numérica en letra y puntos según el sistema UTP."""
    for rango in TABLA_CALIFICACIONES:
        if rango["min"] <= nota <= rango["max"]:
            return {
                "letra": rango["letra"],
                "puntos": rango["puntos"],
                "descripcion": rango["descripcion"]
            }
    return {"letra": "F", "puntos": 0, "descripcion": "Nota inválida"}


def sanitizar_nombre(nombre: str) -> str:
    """
    Limpia el nombre de una materia eliminando caracteres peligrosos.
    Solo permite letras (incluyendo tildes), números, espacios y algunos símbolos comunes.
    Esto previene inyección de código HTML o scripts en el nombre.
    """
    # Eliminar cualquier carácter que no sea letra, número, espacio, guion, punto o paréntesis
    nombre_limpio = re.sub(r"[^\w\s\-\.\(\)áéíóúÁÉÍÓÚñÑüÜ]", "", nombre)
    # Truncar a 100 caracteres máximo
    return nombre_limpio[:100].strip()


# ══════════════════════════════════════════════════════════════════════════════
#  RUTAS
# ══════════════════════════════════════════════════════════════════════════════

@app.route("/")
def index():
    """Página principal — renderiza el formulario."""
    return render_template("index.html")


@app.route("/calcular", methods=["POST"])
@rate_limit  # ← Protección: máximo 30 peticiones por minuto por IP
def calcular():
    """
    Recibe las materias en JSON, valida estrictamente cada campo
    y devuelve el índice académico calculado.
    """

    # ── Validar Content-Type ──────────────────────────────────────────────────
    # Solo aceptamos JSON, rechazar cualquier otro formato
    if not request.is_json:
        return jsonify({"error": "Se esperaba Content-Type: application/json"}), 415

    # ── Parsear JSON de forma segura ──────────────────────────────────────────
    try:
        datos = request.get_json(force=False, silent=True)
    except Exception:
        return jsonify({"error": "JSON malformado"}), 400

    if not datos or "materias" not in datos:
        return jsonify({"error": "No se recibieron materias"}), 400

    materias_entrada = datos["materias"]

    # ── Validar que sea una lista ─────────────────────────────────────────────
    if not isinstance(materias_entrada, list):
        return jsonify({"error": "El campo materias debe ser una lista"}), 400

    # ── Límite de materias por petición (evita loops gigantes) ───────────────
    # Nadie debería tener más de 30 materias en un semestre
    if len(materias_entrada) > 30:
        return jsonify({"error": "Máximo 30 materias por cálculo"}), 400

    materias_resultado = []
    total_creditos = 0
    total_puntos   = 0

    # ── Procesar y validar cada materia ──────────────────────────────────────
    for i, materia in enumerate(materias_entrada):

        # Debe ser un objeto/diccionario
        if not isinstance(materia, dict):
            continue

        # Extraer y sanitizar nombre
        nombre_raw = str(materia.get("nombre", "Sin nombre"))
        nombre     = sanitizar_nombre(nombre_raw)
        if not nombre:
            nombre = "Sin nombre"

        # Validar créditos: debe ser número entre 1 y 10
        try:
            creditos = float(materia.get("creditos", 0))
            if not (1 <= creditos <= 10):
                continue  # Ignorar créditos fuera de rango
        except (TypeError, ValueError):
            continue  # Ignorar si no es número

        # Validar nota: debe ser número entre 0 y 100
        try:
            nota = float(materia.get("nota", 0))
            if not (0 <= nota <= 100):
                nota = 0  # Forzar 0 si está fuera de rango
        except (TypeError, ValueError):
            nota = 0

        # Calcular letra y puntos
        clasificacion  = obtener_letra_y_puntos(nota)
        puntos_materia = creditos * clasificacion["puntos"]

        total_creditos += creditos
        total_puntos   += puntos_materia

        materias_resultado.append({
            "nombre":       nombre,
            "nota":         nota,
            "creditos":     creditos,
            "letra":        clasificacion["letra"],
            "puntos_letra": clasificacion["puntos"],
            "puntos_total": puntos_materia,
            "descripcion":  clasificacion["descripcion"]
        })

    # ── Calcular índice ───────────────────────────────────────────────────────
    indice = round(total_puntos / total_creditos, 4) if total_creditos > 0 else 0.0

    return jsonify({
        "materias":       materias_resultado,
        "total_creditos": total_creditos,
        "total_puntos":   total_puntos,
        "indice":         indice
    })


# ── Manejadores de errores globales ──────────────────────────────────────────
# Devuelven JSON en lugar de páginas HTML de error por defecto

@app.errorhandler(404)
def not_found(e):
    """Página no encontrada."""
    return jsonify({"error": "Ruta no encontrada"}), 404

@app.errorhandler(405)
def method_not_allowed(e):
    """Método HTTP no permitido."""
    return jsonify({"error": "Método no permitido"}), 405

@app.errorhandler(413)
def request_too_large(e):
    """Petición demasiado grande (supera 16 KB)."""
    return jsonify({"error": "Petición demasiado grande"}), 413

@app.errorhandler(429)
def too_many_requests(e):
    """Demasiadas peticiones."""
    return jsonify({"error": "Demasiadas peticiones. Espera un momento."}), 429


# ── Punto de entrada ──────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 55)
    print("  🎓 Calculadora UTP Panamá - Servidor iniciado")
    print("  🌐 Abre tu navegador en: http://localhost:5000")
    print("  🔒 Modo seguro activado")
    print("=" * 55)
    # debug=False en producción para no exponer información interna
    app.run(debug=False, host="0.0.0.0", port=5000)
