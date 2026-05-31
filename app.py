"""
=============================================================
  CALCULADORA DE ÍNDICE ACADÉMICO - UTP PANAMÁ
  Desarrollado con Flask (Python) + HTML/CSS/JS
  
  Archivo principal: app.py
  Este archivo inicia el servidor web y define las rutas (URLs)
  que la página web puede visitar.
=============================================================
"""

# ── Importaciones necesarias ──────────────────────────────────────────────────
from flask import Flask, render_template, request, jsonify  # Framework web
import json  # Para manejar datos en formato JSON entre Python y JavaScript

# ── Creación de la aplicación Flask ───────────────────────────────────────────
# Flask(__name__) le dice a Flask que use este archivo como punto de partida.
# Buscará las carpetas "templates/" y "static/" automáticamente.
app = Flask(__name__)


# ── Tabla de calificaciones según el sistema UTP Panamá ───────────────────────
# En la UTP, las notas van de 0 a 100 puntos y se convierten a letras así:
#   A = 91-100  → 3 puntos (excelente)
#   B = 81-90   → 2 puntos (bueno)
#   C = 71-80   → 1 punto  (regular)
#   D = 61-70   → 0 puntos (deficiente, pero aprobado)
#   F = 0-60    → 0 puntos (reprobado)
#
# El índice académico se calcula con:
#   Índice = Suma(créditos × puntos_por_letra) / Total de créditos
TABLA_CALIFICACIONES = [
    {"min": 91, "max": 100, "letra": "A", "puntos": 3, "descripcion": "Excelente"},
    {"min": 81, "max": 90,  "letra": "B", "puntos": 2, "descripcion": "Bueno"},
    {"min": 71, "max": 80,  "letra": "C", "puntos": 1, "descripcion": "Regular"},
    {"min": 61, "max": 70,  "letra": "D", "puntos": 0, "descripcion": "Deficiente"},
    {"min": 0,  "max": 60,  "letra": "F", "puntos": 0, "descripcion": "Reprobado"},
]


def obtener_letra_y_puntos(nota: float) -> dict:
    """
    Recibe una nota numérica (0–100) y devuelve:
      - letra    → A, B, C, D o F
      - puntos   → valor para calcular el índice (3, 2, 1 o 0)
      - descripcion → texto descriptivo del rendimiento
    
    Ejemplo:
        obtener_letra_y_puntos(87) → {"letra": "B", "puntos": 2, "descripcion": "Bueno"}
    """
    for rango in TABLA_CALIFICACIONES:
        if rango["min"] <= nota <= rango["max"]:
            return {
                "letra": rango["letra"],
                "puntos": rango["puntos"],
                "descripcion": rango["descripcion"]
            }
    # Si la nota está fuera del rango (negativa, >100), devuelve F por seguridad
    return {"letra": "F", "puntos": 0, "descripcion": "Nota inválida"}


# ── RUTA PRINCIPAL: Página de inicio ─────────────────────────────────────────
@app.route("/")
def index():
    """
    Cuando el usuario visita http://localhost:5000/
    Flask renderiza el archivo 'templates/index.html' y lo envía al navegador.
    """
    return render_template("index.html")


# ── RUTA API: Calcular índice académico ──────────────────────────────────────
@app.route("/calcular", methods=["POST"])
def calcular():
    """
    Endpoint que recibe los datos de materias desde el formulario (en formato JSON),
    calcula el índice académico y devuelve los resultados.

    Espera recibir un JSON con esta estructura:
    {
      "materias": [
        {"nombre": "Cálculo I", "creditos": 5, "nota": 62.8},
        {"nombre": "Inglés I",  "creditos": 3, "nota": 100},
        ...
      ]
    }

    Devuelve:
    {
      "materias": [...],   ← cada materia con letra, puntos y puntos_totales calculados
      "total_creditos": 24,
      "total_puntos": 26,
      "indice": 1.08
    }
    """
    # ── Obtener los datos enviados desde el navegador ─────────────────────────
    datos = request.get_json()

    # Validar que existan materias en la solicitud
    if not datos or "materias" not in datos:
        return jsonify({"error": "No se recibieron materias"}), 400

    materias_entrada = datos["materias"]
    materias_resultado = []  # Lista donde acumularemos los resultados
    total_creditos = 0       # Suma de todos los créditos ingresados
    total_puntos = 0         # Suma de (créditos × puntos_por_letra) de cada materia

    # ── Procesar cada materia ─────────────────────────────────────────────────
    for materia in materias_entrada:
        nombre   = materia.get("nombre", "Sin nombre").strip()
        creditos = float(materia.get("creditos", 0))
        nota     = float(materia.get("nota", 0))

        # Validaciones básicas
        if creditos <= 0:
            continue  # Ignorar materias con créditos inválidos
        if not (0 <= nota <= 100):
            nota = 0  # Forzar 0 si la nota está fuera de rango

        # Obtener letra y puntos según la tabla de calificaciones UTP
        clasificacion = obtener_letra_y_puntos(nota)

        # Calcular los puntos que esta materia aporta al índice
        # Fórmula: créditos × puntos_por_letra
        puntos_materia = creditos * clasificacion["puntos"]

        # Acumular totales
        total_creditos += creditos
        total_puntos   += puntos_materia

        # Guardar el resultado de esta materia
        materias_resultado.append({
            "nombre":        nombre,
            "nota":          nota,
            "creditos":      creditos,
            "letra":         clasificacion["letra"],
            "puntos_letra":  clasificacion["puntos"],
            "puntos_total":  puntos_materia,
            "descripcion":   clasificacion["descripcion"]
        })

    # ── Calcular el índice académico ──────────────────────────────────────────
    # Fórmula oficial UTP: Índice = Total de puntos / Total de créditos
    # Si no hay créditos, el índice es 0 (evitar división por cero)
    if total_creditos > 0:
        indice = round(total_puntos / total_creditos, 4)
    else:
        indice = 0.0

    # ── Devolver los resultados en formato JSON al navegador ──────────────────
    return jsonify({
        "materias":       materias_resultado,
        "total_creditos": total_creditos,
        "total_puntos":   total_puntos,
        "indice":         indice
    })


# ── Punto de entrada: ejecutar el servidor ────────────────────────────────────
# Este bloque solo se ejecuta cuando corres "python app.py" directamente.
# debug=True recarga automáticamente el servidor cuando cambias el código.
# host="0.0.0.0" permite acceder desde cualquier dispositivo en la red local.
if __name__ == "__main__":
    print("=" * 55)
    print("  🎓 Calculadora UTP Panamá - Servidor iniciado")
    print("  🌐 Abre tu navegador en: http://localhost:5000")
    print("=" * 55)
    app.run(debug=True, host="0.0.0.0", port=5000)
