# 🎓 Calculadora de Índice Académico · UTP Panamá

Aplicación web en Python/Flask con paleta lila-morada para calcular el índice académico según el sistema de calificaciones de la Universidad Tecnológica de Panamá (UTP).

---

## 📁 Estructura del proyecto

```
calculadora_utp/
├── app.py               ← Servidor Flask (backend Python)
├── requirements.txt     ← Dependencias (solo Flask)
├── README.md            ← Esta guía
└── templates/
    └── index.html       ← Página web completa (HTML + CSS + JS)
```

---

## 🖥️ PASO A PASO: Cómo correrlo en tu computadora

### Paso 1 — Verifica que tienes Python instalado

Abre la terminal (CMD, PowerShell o Terminal en Mac/Linux) y escribe:

```bash
python --version
```

Debe mostrar algo como `Python 3.10.x`. Si no está instalado, descárgalo de [python.org](https://python.org).

---

### Paso 2 — Instala Flask

Ejecuta este comando en la terminal:

```bash
pip install flask
```

O usa el archivo de dependencias:

```bash
pip install -r requirements.txt
```

---

### Paso 3 — Corre la aplicación

Navega hasta la carpeta del proyecto y ejecuta:

```bash
cd calculadora_utp
python app.py
```

Verás este mensaje:

```
═══════════════════════════════════════════════════════
  🎓 Calculadora UTP Panamá - Servidor iniciado
  🌐 Abre tu navegador en: http://localhost:5000
═══════════════════════════════════════════════════════
```

---

### Paso 4 — Abre el navegador

Abre **Google Chrome**, **Firefox** o cualquier navegador y visita:

```
http://localhost:5000
```

¡Listo! Verás la calculadora con las materias pre-cargadas.

---

## 🎓 Cómo usar la calculadora

1. **Completa los campos** de cada materia: nombre, créditos y nota (0-100).
2. El **chip de letra** (A/B/C/D/F) se actualiza automáticamente mientras escribes.
3. Haz clic en **"Calcular índice académico"**.
4. Verás el índice, una barra visual y el detalle de cada materia.
5. Usa **"+ Agregar materia"** para agregar más filas.
6. Usa **"Limpiar"** para reiniciar el formulario.

---

## 📊 Fórmula del índice (sistema UTP)

| Nota | Letra | Puntos |
|------|-------|--------|
| 91–100 | A | 3 |
| 81–90  | B | 2 |
| 71–80  | C | 1 |
| 61–70  | D | 0 |
| 0–60   | F | 0 |

**Fórmula:**
```
Índice = Σ(Créditos × Puntos por Letra) / Total de Créditos
```

---

## 🌐 Subir a GitHub Pages / Render (gratis)

### Opción A — GitHub + Render (recomendado, gratis)

1. **Crea una cuenta** en [github.com](https://github.com) y en [render.com](https://render.com).

2. **Crea un repositorio** en GitHub:
   - Haz clic en **"New repository"**
   - Ponle nombre: `calculadora-utp`
   - Deja en **Public** y crea.

3. **Sube tu código** desde la terminal:
   ```bash
   cd calculadora_utp
   git init
   git add .
   git commit -m "Primera versión de la calculadora UTP"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/calculadora-utp.git
   git push -u origin main
   ```
   > Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

4. **Crea un archivo `Procfile`** en la carpeta raíz (necesario para Render):
   ```
   web: gunicorn app:app
   ```
   
5. **Agrega gunicorn a requirements.txt**:
   ```
   flask>=2.3.0
   gunicorn>=21.0.0
   ```

6. **En Render.com**:
   - Crea una cuenta gratuita.
   - Haz clic en **"New Web Service"**.
   - Conecta tu cuenta de GitHub y selecciona el repositorio `calculadora-utp`.
   - Render detecta automáticamente que es Python/Flask.
   - Haz clic en **"Deploy"**.
   - En unos minutos tendrás una URL pública como: `https://calculadora-utp.onrender.com`

---

### Opción B — Solo GitHub (como referencia de código)

Si solo quieres guardar tu código sin necesidad de servidor:

```bash
cd calculadora_utp
git init
git add .
git commit -m "Calculadora UTP Panamá"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/calculadora-utp.git
git push -u origin main
```

---

## 🛠️ Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| `ModuleNotFoundError: flask` | Ejecuta `pip install flask` |
| Puerto 5000 ocupado | Cambia el puerto en `app.py`: `port=5001` |
| La página no carga | Verifica que el servidor siga corriendo en la terminal |
| `git: command not found` | Instala Git desde [git-scm.com](https://git-scm.com) |

---

## 📝 Créditos

- Sistema de calificaciones basado en el reglamento académico de la **UTP Panamá**.
- Desarrollado con **Flask** (Python) + **HTML/CSS/JS** puro.
- Paleta de colores: lilas y morados.
