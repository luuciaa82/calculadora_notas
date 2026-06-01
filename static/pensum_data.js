// ============================================================
//  DATOS DE PENSUM - UTP CENTRO REGIONAL DE AZUERO
//  Fuente: Planes de estudio oficiales UTP 2024-2025
//  Organizado por: Facultad → Carrera → Semestre → Materias
// ============================================================

const PENSUM = {

  // ══════════════════════════════════════════════════════════
  //  FACULTAD DE INGENIERÍA ELÉCTRICA (FIE)
  // ══════════════════════════════════════════════════════════
  "FIE": {
    nombre: "Facultad de Ingeniería Eléctrica",
    color: "#6b21a8",
    carreras: {

      "electromecanica": {
        nombre: "Ing. Electromecánica",
        creditos_total: 243,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Cálculo I", creditos: 5 },
            { nombre: "Física I (Mecánica)", creditos: 5 },
            { nombre: "Química I", creditos: 4 },
            { nombre: "Inglés I", creditos: 3 },
            { nombre: "Dibujo I", creditos: 4 },
            { nombre: "Desarrollo Lógico y Algorítmos", creditos: 4 },
            { nombre: "Comunicación Oral y Escrita", creditos: 3 },
            { nombre: "Geografía de Panamá", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Cálculo II", creditos: 5 },
            { nombre: "Cálculo III", creditos: 4 },
            { nombre: "Física II (Electricidad y Magnetismo)", creditos: 5 },
            { nombre: "Inglés II", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 5 },
            { nombre: "Estadística", creditos: 3 },
            { nombre: "Estática", creditos: 3 },
            { nombre: "Tecnología Mecánica", creditos: 1 },
            { nombre: "Historia de Panamá", creditos: 3 },
            { nombre: "Electiva Complementaria", creditos: 3 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Matemática Superiores para Ing.", creditos: 5 },
            { nombre: "Circuitos I", creditos: 6 },
            { nombre: "Teoría Electromagnética I", creditos: 4 },
            { nombre: "Métodos Numéricos", creditos: 4 },
            { nombre: "Dinámica", creditos: 3 },
            { nombre: "Mecánica de Materiales", creditos: 5 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Termodinámica I", creditos: 3 },
            { nombre: "Circuitos II", creditos: 5 },
            { nombre: "Circuitos III", creditos: 4 },
            { nombre: "Mecánica de Fluidos I", creditos: 4 },
            { nombre: "Teoría Electromagnética II", creditos: 4 },
            { nombre: "Fundamentos de Electrónica", creditos: 5 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Termodinámica II", creditos: 3 },
            { nombre: "Mecánica de Fluidos II", creditos: 4 },
            { nombre: "Conversión de Energía I", creditos: 4 },
            { nombre: "Tecnología Eléctrica", creditos: 1 },
            { nombre: "Circuitos Lógicos Electrónicos", creditos: 4 },
            { nombre: "Diseño Mecánico I", creditos: 3 },
            { nombre: "Electiva Complementaria", creditos: 3 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Conversión de Energía II", creditos: 4 },
            { nombre: "Teoría de Control I", creditos: 5 },
            { nombre: "Transferencia de Calor", creditos: 4 },
            { nombre: "Dinámica Aplicada", creditos: 4 },
            { nombre: "Diseño Mecánico II", creditos: 3 },
            { nombre: "Ciencia de los Materiales I", creditos: 4 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Ética Profesional", creditos: 2 },
            { nombre: "Sistemas de Potencia", creditos: 6 },
            { nombre: "Teoría de Control II", creditos: 5 },
            { nombre: "Ciencias de los Materiales II", creditos: 4 },
            { nombre: "Electiva Complementaria", creditos: 3 },
          ],
          "V Año — Primer Semestre": [
            { nombre: "Diseño Eléctrico e Iluminación", creditos: 4 },
            { nombre: "Ambiente y Sostenibilidad", creditos: 3 },
            { nombre: "Turbomaquinaria", creditos: 4 },
            { nombre: "Electrónica de Potencia", creditos: 4 },
            { nombre: "Líneas y Subestaciones", creditos: 4 },
            { nombre: "Asignaturas Electivas", creditos: 4 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "V Año — Segundo Semestre": [
            { nombre: "Control de Sist. Secuenciales y Comb.", creditos: 4 },
            { nombre: "Diseño de Sistemas Térmicos y Fluídicos", creditos: 4 },
            { nombre: "Aire Acondicionado y Refrigeración", creditos: 4 },
            { nombre: "Plantas de Potencia", creditos: 4 },
            { nombre: "Proyecto de Ingeniería", creditos: 4 },
            { nombre: "Asignaturas Electivas", creditos: 4 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      },

      "electronica_telecom": {
        nombre: "Ing. Electrónica y Telecomunicaciones",
        creditos_total: 233,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Cálculo I", creditos: 5 },
            { nombre: "Física I (Mecánica)", creditos: 5 },
            { nombre: "Química I", creditos: 4 },
            { nombre: "Inglés I", creditos: 3 },
            { nombre: "Desarrollo Lógico y Algorítmos", creditos: 4 },
            { nombre: "Comunicación Oral y Escrita", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Cálculo II", creditos: 5 },
            { nombre: "Cálculo III", creditos: 4 },
            { nombre: "Física II (Electricidad y Magnetismo)", creditos: 5 },
            { nombre: "Inglés II", creditos: 3 },
            { nombre: "Dibujo I", creditos: 4 },
            { nombre: "Geografía de Panamá", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 5 },
            { nombre: "Estadística", creditos: 3 },
            { nombre: "Ambiente y Sostenibilidad", creditos: 3 },
            { nombre: "Historia de Panamá", creditos: 3 },
            { nombre: "Electiva Complementaria", creditos: 3 },
            { nombre: "Electiva Complementaria", creditos: 3 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Matemática Superiores para Ing.", creditos: 5 },
            { nombre: "Circuitos I", creditos: 6 },
            { nombre: "Teoría Electromagnética I", creditos: 4 },
            { nombre: "Métodos Numéricos", creditos: 4 },
            { nombre: "Dinámica de Sistemas Electromecánicos", creditos: 5 },
            { nombre: "Metodología de la Investigación", creditos: 3 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Teoría Electromagnética II", creditos: 4 },
            { nombre: "Probabilidad y Procesos Aleatorios", creditos: 4 },
            { nombre: "Termodinámica", creditos: 3 },
            { nombre: "Teoría de Control I", creditos: 5 },
            { nombre: "Fundamentos de Electrónica", creditos: 5 },
            { nombre: "Circuitos II", creditos: 5 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Tecnología Eléctrica", creditos: 1 },
            { nombre: "Circuitos III", creditos: 4 },
            { nombre: "Síntesis de Filtros Analógicos", creditos: 4 },
            { nombre: "Teoría de Control II", creditos: 5 },
            { nombre: "Circuitos Lógicos Electrónicos", creditos: 4 },
            { nombre: "Electiva Complementaria", creditos: 3 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Conversión de Energía I", creditos: 4 },
            { nombre: "Microprocesadores", creditos: 4 },
            { nombre: "Electrónica de Potencia", creditos: 4 },
            { nombre: "Amplificadores Electrónicos", creditos: 4 },
            { nombre: "Ética Profesional", creditos: 2 },
            { nombre: "Asignaturas Electivas", creditos: 4 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Sistemas de Potencia", creditos: 6 },
            { nombre: "Electrónica Aplicada", creditos: 4 },
            { nombre: "Computadores Digitales", creditos: 4 },
            { nombre: "Conversión de Energía II", creditos: 4 },
            { nombre: "Asignaturas Electivas", creditos: 4 },
            { nombre: "Diseño Eléctrico e Iluminación", creditos: 4 },
          ],
          "V Año — Primer Semestre": [
            { nombre: "Control de Máquinas Eléctricas", creditos: 4 },
            { nombre: "Optoelectrónica", creditos: 4 },
            { nombre: "Control de Sist. Secuenciales y Comb.", creditos: 4 },
            { nombre: "Producción de la Energía Eléctrica", creditos: 4 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "V Año — Segundo Semestre": [
            { nombre: "Proyecto de Ingeniería", creditos: 4 },
            { nombre: "Fundamentos de Telecomunicaciones", creditos: 5 },
            { nombre: "Protecciones Eléctricas", creditos: 4 },
            { nombre: "Diseño de Sistemas Especiales", creditos: 4 },
            { nombre: "Líneas y Subestaciones", creditos: 4 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      },

      "electronica_sistemas_com": {
        nombre: "Electrónica y Sistemas de Comunicación",
        creditos_total: 233,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Cálculo I", creditos: 5 },
            { nombre: "Física I (Mecánica)", creditos: 5 },
            { nombre: "Química I", creditos: 4 },
            { nombre: "Inglés I", creditos: 3 },
            { nombre: "Desarrollo Lógico y Algorítmos", creditos: 4 },
            { nombre: "Comunicación Oral y Escrita", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Cálculo II", creditos: 5 },
            { nombre: "Cálculo III", creditos: 4 },
            { nombre: "Física II (Electricidad y Magnetismo)", creditos: 5 },
            { nombre: "Inglés II", creditos: 3 },
            { nombre: "Dibujo I", creditos: 4 },
            { nombre: "Geografía de Panamá", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 5 },
            { nombre: "Estadística", creditos: 3 },
            { nombre: "Ambiente y Sostenibilidad", creditos: 3 },
            { nombre: "Historia de Panamá", creditos: 3 },
            { nombre: "Electiva Complementaria", creditos: 3 },
            { nombre: "Electiva Complementaria", creditos: 3 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Matemática Superiores para Ing.", creditos: 5 },
            { nombre: "Circuitos I", creditos: 6 },
            { nombre: "Teoría Electromagnética I", creditos: 4 },
            { nombre: "Métodos Numéricos", creditos: 4 },
            { nombre: "Dinámica de Sistemas Electromecánicos", creditos: 5 },
            { nombre: "Metodología de la Investigación", creditos: 3 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Teoría Electromagnética II", creditos: 4 },
            { nombre: "Probabilidad y Procesos Aleatorios", creditos: 4 },
            { nombre: "Teoría de Control I", creditos: 5 },
            { nombre: "Fundamentos de Electrónica", creditos: 5 },
            { nombre: "Circuitos II", creditos: 5 },
            { nombre: "Termodinámica", creditos: 3 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Circuitos III", creditos: 4 },
            { nombre: "Síntesis de Filtros Analógicos", creditos: 4 },
            { nombre: "Teoría de Control II", creditos: 5 },
            { nombre: "Circuitos Lógicos Electrónicos", creditos: 4 },
            { nombre: "Tecnología Eléctrica", creditos: 1 },
            { nombre: "Electiva Complementaria", creditos: 3 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Microprocesadores", creditos: 4 },
            { nombre: "Amplificadores Electrónicos", creditos: 4 },
            { nombre: "Electrónica de Potencia", creditos: 4 },
            { nombre: "Conversión de Energía I", creditos: 4 },
            { nombre: "Ética Profesional", creditos: 2 },
            { nombre: "Asignaturas Electivas", creditos: 4 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Electrónica Aplicada", creditos: 4 },
            { nombre: "Computadores Digitales", creditos: 4 },
            { nombre: "Sistemas de Potencia", creditos: 6 },
            { nombre: "Conversión de Energía II", creditos: 4 },
            { nombre: "Diseño Eléctrico e Iluminación", creditos: 4 },
            { nombre: "Asignaturas Electivas", creditos: 4 },
          ],
          "V Año — Primer Semestre": [
            { nombre: "Fundamentos de Telecomunicaciones", creditos: 5 },
            { nombre: "Control de Sist. Secuenciales y Comb.", creditos: 4 },
            { nombre: "Optoelectrónica", creditos: 4 },
            { nombre: "Producción de la Energía Eléctrica", creditos: 4 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "V Año — Segundo Semestre": [
            { nombre: "Proyecto de Ingeniería", creditos: 4 },
            { nombre: "Protecciones Eléctricas", creditos: 4 },
            { nombre: "Diseño de Sistemas Especiales", creditos: 4 },
            { nombre: "Líneas y Subestaciones", creditos: 4 },
            { nombre: "Control de Máquinas Eléctricas", creditos: 4 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      }
    }
  },

  // ══════════════════════════════════════════════════════════
  //  FACULTAD DE INGENIERÍA MECÁNICA (FIM)
  // ══════════════════════════════════════════════════════════
  "FIM": {
    nombre: "Facultad de Ingeniería Mecánica",
    color: "#1e3a8a",
    carreras: {

      "mecanica": {
        nombre: "Ing. Mecánica",
        creditos_total: 236,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Cálculo I", creditos: 5 },
            { nombre: "Física I (Mecánica)", creditos: 5 },
            { nombre: "Química I", creditos: 4 },
            { nombre: "Inglés I", creditos: 3 },
            { nombre: "Desarrollo Lógico y Algorítmos", creditos: 4 },
            { nombre: "Comunicación Oral y Escrita", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Cálculo II", creditos: 5 },
            { nombre: "Cálculo III", creditos: 4 },
            { nombre: "Física II (Electricidad y Magnetismo)", creditos: 5 },
            { nombre: "Inglés II", creditos: 3 },
            { nombre: "Dibujo I", creditos: 4 },
            { nombre: "Geografía de Panamá", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 5 },
            { nombre: "Estática", creditos: 4 },
            { nombre: "Programación", creditos: 4 },
            { nombre: "Historia de Panamá", creditos: 3 },
            { nombre: "Probabilidad y Estadística", creditos: 3 },
            { nombre: "Diseño y Creatividad I", creditos: 3 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Matemática Superiores para Ing.", creditos: 5 },
            { nombre: "Métodos Numéricos", creditos: 4 },
            { nombre: "Dinámica", creditos: 4 },
            { nombre: "Mecánica de Materiales", creditos: 5 },
            { nombre: "Tecnología Mecánica", creditos: 4 },
            { nombre: "Introducción a la Ingeniería Aeroespacial", creditos: 2 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Diseño de Elem. de Máquinas I", creditos: 4 },
            { nombre: "Termodinámica I", creditos: 4 },
            { nombre: "Fundamentos de Sistemas Dinámicos Aeroesp.", creditos: 4 },
            { nombre: "Mecánica de Fluidos I", creditos: 4 },
            { nombre: "Ciencia de los Materiales I", creditos: 4 },
            { nombre: "Dinámica Aplicada", creditos: 4 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Diseño de Elem. de Máquinas II", creditos: 4 },
            { nombre: "Termodinámica II", creditos: 4 },
            { nombre: "Ingeniería Eléctrica", creditos: 4 },
            { nombre: "Dinámica de Gases", creditos: 4 },
            { nombre: "Ciencias de los Materiales II", creditos: 4 },
            { nombre: "Teoría de Control", creditos: 4 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Aerodinámica", creditos: 4 },
            { nombre: "Sist. Neumáticos e Hidráulicos de Aeron.", creditos: 3 },
            { nombre: "Ingeniería de Manufactura", creditos: 4 },
            { nombre: "Transferencia de Calor", creditos: 4 },
            { nombre: "Electrónica Industrial", creditos: 4 },
            { nombre: "Ambiente y Sostenibilidad", creditos: 3 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Mecánica de Vuelo", creditos: 3 },
            { nombre: "Motores de Aeronaves I", creditos: 4 },
            { nombre: "Materiales Compuestos", creditos: 3 },
            { nombre: "Sistemas de Aeronaves I", creditos: 3 },
            { nombre: "Sist. de Acondic. de Aire en Aeronaves", creditos: 3 },
            { nombre: "Mecánica de Estructuras de Aeronaves", creditos: 4 },
            { nombre: "Admón. y Eval. de Proy.", creditos: 3 },
          ],
          "V Año — Primer Semestre": [
            { nombre: "Dinám. y Control de Vehículos Aeroespac.", creditos: 3 },
            { nombre: "Sistemas de Aeronaves II", creditos: 3 },
            { nombre: "Sistemas de Navegación y Comunicación", creditos: 4 },
            { nombre: "Sistemas Eléctricos de las Aeronaves", creditos: 4 },
            { nombre: "Motores de Aeronaves II", creditos: 4 },
            { nombre: "Materia Electiva", creditos: 3 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "V Año — Segundo Semestre": [
            { nombre: "Reparación de Estructuras de Aeronaves", creditos: 4 },
            { nombre: "Mantenimiento de Motores de Aeronaves", creditos: 3 },
            { nombre: "Comp. y Sistemas Electrónicos de Aerona.", creditos: 3 },
            { nombre: "Métodos de Inspección de Aeronaves", creditos: 3 },
            { nombre: "Proyecto de Ingeniería Aeronáutica", creditos: 3 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      },

      "mecanica_industrial": {
        nombre: "Mecánica Industrial",
        creditos_total: 198,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Dibujo Lineal y Geometría Descriptiva", creditos: 4 },
            { nombre: "Matemática I", creditos: 5 },
            { nombre: "Herramientas Informáticas", creditos: 4 },
            { nombre: "Inglés I", creditos: 3 },
            { nombre: "Electricidad Básica", creditos: 4 },
            { nombre: "Comunicación Oral y Escrita", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Dibujo Mecánico Asistido por Computadora", creditos: 4 },
            { nombre: "Matemática II", creditos: 5 },
            { nombre: "Mecánica Básica", creditos: 4 },
            { nombre: "Tecnología y Mecánica de Precisión I", creditos: 4 },
            { nombre: "Lab. Tecnología y Mecán. de Precisión I", creditos: 3 },
            { nombre: "Tecnología y Motores de Gasolina", creditos: 3 },
            { nombre: "Laboratorio de Tec. Motores de Gasolina", creditos: 2 },
          ],
          "II Año — Verano": [
            { nombre: "Materiales", creditos: 3 },
            { nombre: "Organización de Talleres", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Geografía de Panamá", creditos: 3 },
            { nombre: "Tecnología y Mecánica de Precisión II", creditos: 3 },
            { nombre: "Lab. Tecnología y Mecán. de Precisión II", creditos: 2 },
            { nombre: "Tecnología y Motores Diesel", creditos: 3 },
            { nombre: "Laboratorio de Tecn. de Motores Diesel", creditos: 2 },
            { nombre: "Electricidad Industrial", creditos: 5 },
            { nombre: "Estática y Resistencia de Materiales", creditos: 3 },
            { nombre: "Mecánica de los Fluidos", creditos: 4 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Tecnología de Soldadura I", creditos: 3 },
            { nombre: "Laboratorio de Tecn. Soldadura I", creditos: 2 },
            { nombre: "Tecnología y Hojalatería", creditos: 3 },
            { nombre: "Laboratorio de Tecnología y Hojalatería", creditos: 2 },
            { nombre: "Sistema Neumáticos e Hidráulicos", creditos: 3 },
            { nombre: "Diseño de Máquinas I", creditos: 4 },
            { nombre: "Instalaciones Mecánicas y Mant.", creditos: 3 },
            { nombre: "Historia de Panamá", creditos: 3 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Máquinas Térmicas", creditos: 4 },
            { nombre: "Tecnología de Soldadura II", creditos: 3 },
            { nombre: "Laboratorio de Tec. Soldadura II", creditos: 2 },
            { nombre: "Tecn. y Aplicación de Procesos de CNC", creditos: 3 },
            { nombre: "Lab. Tecn. y Aplicación de Proc. de CNC", creditos: 3 },
            { nombre: "Diseño de Máquina II", creditos: 4 },
            { nombre: "Turbomaquinarias", creditos: 4 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Cálculo Diferencial I", creditos: 5 },
            { nombre: "Álgebra de Vectores y Matrices", creditos: 3 },
            { nombre: "Electrónica Básica", creditos: 4 },
            { nombre: "Fundamentos de Ingeniería Ambiental", creditos: 3 },
            { nombre: "Formación de Emprendedores", creditos: 3 },
            { nombre: "Supervisión y Relaciones Hum.", creditos: 3 },
            { nombre: "Inst. y Mant. de Sist. de Refrig. y Aire", creditos: 3 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Cálculo Diferencial II", creditos: 5 },
            { nombre: "Legislación Laboral y Contratos", creditos: 3 },
            { nombre: "Diseño y Admón. Programas de Mant.", creditos: 3 },
            { nombre: "Metalurgia Aplicada", creditos: 3 },
            { nombre: "Electrónica Industrial", creditos: 4 },
            { nombre: "Teoría de Máquinas", creditos: 4 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 5 },
            { nombre: "Sistema de Control e Instrumentación", creditos: 4 },
            { nombre: "Técnicas de Investigación", creditos: 2 },
            { nombre: "Evaluación de Proyectos", creditos: 3 },
            { nombre: "Proc. Esp. de Soldadura", creditos: 3 },
            { nombre: "Diseño e Instalaciones de Fontanería", creditos: 4 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      }
    }
  },

  // ══════════════════════════════════════════════════════════
  //  FACULTAD DE INGENIERÍA DE SISTEMAS COMPUTACIONALES (FISC)
  // ══════════════════════════════════════════════════════════
  "FISC": {
    nombre: "Facultad de Ingeniería de Sistemas Computacionales",
    color: "#0f766e",
    carreras: {

      "sistemas_computacion": {
        nombre: "Ing. de Sistemas y Computación",
        creditos_total: 221,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Cálculo I", creditos: 5 },
            { nombre: "Física I (Mecánica)", creditos: 5 },
            { nombre: "Química I", creditos: 4 },
            { nombre: "Inglés I", creditos: 3 },
            { nombre: "Dibujo I", creditos: 4 },
            { nombre: "Desarrollo Lógico y Algorítmos", creditos: 4 },
            { nombre: "Comunicación Oral y Escrita", creditos: 3 },
            { nombre: "Geografía de Panamá", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Cálculo II", creditos: 5 },
            { nombre: "Cálculo III", creditos: 4 },
            { nombre: "Física II (Electricidad y Magnetismo)", creditos: 5 },
            { nombre: "Inglés II", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Ecuaciones Diferenciales Ordinarias", creditos: 5 },
            { nombre: "Tecnología de Información y Comunicac.", creditos: 4 },
            { nombre: "Estadística Aplicada", creditos: 3 },
            { nombre: "Interacción Humano Computador", creditos: 3 },
            { nombre: "Lenguaje de Programación I", creditos: 4 },
            { nombre: "Estructuras Discretas", creditos: 4 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Matemática Superiores para Ing.", creditos: 5 },
            { nombre: "Sistemas Colaborativos", creditos: 4 },
            { nombre: "Métodos Numéricos para Ingeniería", creditos: 4 },
            { nombre: "Estructura de Datos I", creditos: 4 },
            { nombre: "Probabilidad Aplicada", creditos: 3 },
            { nombre: "Lenguaje de Programación II", creditos: 4 },
            { nombre: "Electrónica Básica", creditos: 3 },
          ],
          "II Año — Verano": [
            { nombre: "Ambiente y Sostenibilidad", creditos: 3 },
            { nombre: "Historia de Panamá", creditos: 3 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Análisis Datos y Toma de Dec. para Comp.", creditos: 4 },
            { nombre: "Herramientas de Computación Gráfica", creditos: 3 },
            { nombre: "Inteligencia Artificial", creditos: 4 },
            { nombre: "Estructura de Datos II", creditos: 4 },
            { nombre: "Ingeniería de Software I", creditos: 4 },
            { nombre: "Base de Datos I", creditos: 4 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Animación Digital", creditos: 3 },
            { nombre: "Metodología de la Investigación", creditos: 3 },
            { nombre: "Circuitos Lógicos", creditos: 3 },
            { nombre: "Ingeniería de Sistemas Robóticos", creditos: 4 },
            { nombre: "Ingeniería de Software II", creditos: 4 },
            { nombre: "Base de Datos II", creditos: 4 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Videojuegos", creditos: 3 },
            { nombre: "Aprendizaje Automático", creditos: 4 },
            { nombre: "Ingeniería de Sistemas Dinámicos", creditos: 4 },
            { nombre: "Lenguaje de Programación III", creditos: 4 },
            { nombre: "Gerencia de Proyectos Informáticos", creditos: 4 },
            { nombre: "Org. y Arquitectura de Computadora", creditos: 4 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Tópicos Especiales I", creditos: 3 },
            { nombre: "Lenguajes Formales, Autómatas y Compil.", creditos: 4 },
            { nombre: "Ingeniería de Sistemas Inteligentes", creditos: 4 },
            { nombre: "Simulación de Sistemas", creditos: 4 },
            { nombre: "Sistemas Operativos", creditos: 4 },
            { nombre: "Lenguaje de Programación IV", creditos: 4 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "V Año — Primer Semestre": [
            { nombre: "Gerencia de Recursos Humanos", creditos: 4 },
            { nombre: "Tópicos Especiales II", creditos: 3 },
            { nombre: "Política y Legislación Informática", creditos: 3 },
            { nombre: "Redes Informáticas", creditos: 4 },
            { nombre: "Formación de Emprendedores", creditos: 3 },
            { nombre: "Seguridad Informática", creditos: 4 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      },

      "desarrollo_software": {
        nombre: "Desarrollo de Software",
        creditos_total: 166,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Tecnología de Información y Comunicac.", creditos: 4 },
            { nombre: "Desarrollo de Software I", creditos: 4 },
            { nombre: "Fundamentos de Matemática I", creditos: 4 },
            { nombre: "Inglés I", creditos: 2 },
            { nombre: "Comunicación Oral y Escrita", creditos: 2 },
            { nombre: "Desarrollo Personal", creditos: 2 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Trabajo en Equipo y Liderazgo", creditos: 3 },
            { nombre: "Fundamentos de Matemática II", creditos: 4 },
            { nombre: "Desarrollo de Software II", creditos: 4 },
            { nombre: "Estructura de Datos I", creditos: 4 },
            { nombre: "Inglés II", creditos: 2 },
            { nombre: "Base de Datos I", creditos: 4 },
          ],
          "I Año — Verano": [
            { nombre: "Geografía de Panamá", creditos: 3 },
            { nombre: "Ética Profesional", creditos: 2 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Desarrollo de Software III", creditos: 4 },
            { nombre: "Fundamentos de Matemática III", creditos: 4 },
            { nombre: "Diseño de Interfaces de Usuario", creditos: 3 },
            { nombre: "Estructura de Datos II", creditos: 4 },
            { nombre: "Base de Datos II", creditos: 4 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Desarrollo de Software IV", creditos: 4 },
            { nombre: "Ingeniería de Software Aplicada I", creditos: 4 },
            { nombre: "Desarrollo de Software V", creditos: 4 },
            { nombre: "Estadística y Probabilidad", creditos: 3 },
            { nombre: "Organización y Arquitectura de Comp. I", creditos: 4 },
          ],
          "II Año — Verano": [
            { nombre: "Ecología General", creditos: 3 },
            { nombre: "Historia de Panamá", creditos: 3 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Metodología de la Investigación", creditos: 3 },
            { nombre: "Ingeniería de Software Aplicada II", creditos: 4 },
            { nombre: "Desarrollo de Software VI", creditos: 4 },
            { nombre: "Desarrollo de Software VII", creditos: 4 },
            { nombre: "Contabilidad General", creditos: 3 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Desarrollo de Software VIII", creditos: 4 },
            { nombre: "Redes de Computadoras", creditos: 4 },
            { nombre: "Ingeniería de Software Aplicada III", creditos: 3 },
            { nombre: "Sistemas Operativos", creditos: 4 },
            { nombre: "Legislación Laboral e Informática", creditos: 2 },
          ],
          "III Año — Verano": [
            { nombre: "Práctica Laboral en Desarrollo de Softw.", creditos: 3 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Innovación y Emprendimiento", creditos: 3 },
            { nombre: "Tópicos Especiales I", creditos: 3 },
            { nombre: "Desarrollo de Software IX", creditos: 4 },
            { nombre: "Seguridad en el Desarrollo de Software", creditos: 3 },
            { nombre: "Ingeniería de Software Aplicada IV", creditos: 3 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Tópicos Especiales II", creditos: 3 },
            { nombre: "Gerencia de Proyectos Informáticos", creditos: 4 },
            { nombre: "Sistemas de Información Gerencial", creditos: 4 },
            { nombre: "Gerencia de Recursos Tecn. de Inf. y Com.", creditos: 4 },
            { nombre: "Administración Financiera", creditos: 3 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      },

      "redes": {
        nombre: "Redes Informáticas",
        creditos_total: 175,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Tecnología de Información y Comunicac.", creditos: 4 },
            { nombre: "Desarrollo Lógico y Algorítmos", creditos: 4 },
            { nombre: "Matemática I", creditos: 5 },
            { nombre: "Fundamentos de Electricidad", creditos: 4 },
            { nombre: "Inglés I", creditos: 3 },
            { nombre: "Español", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Matemática II", creditos: 5 },
            { nombre: "Programación para Redes I", creditos: 3 },
            { nombre: "Sistemas Colaborativos", creditos: 3 },
            { nombre: "Organización y Arquitectura de Comp. I", creditos: 4 },
            { nombre: "Circuitos Lógicos", creditos: 4 },
          ],
          "I Año — Verano": [
            { nombre: "Contabilidad General", creditos: 3 },
            { nombre: "Inglés II", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Estructura de Datos", creditos: 4 },
            { nombre: "Programación para Redes II", creditos: 3 },
            { nombre: "Sistemas Operativos I", creditos: 4 },
            { nombre: "Comunicación de Datos", creditos: 3 },
            { nombre: "Organización y Arquitectura de Comp. II", creditos: 4 },
            { nombre: "Historia de Panamá", creditos: 3 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Redes Informáticas I", creditos: 3 },
            { nombre: "Sistemas Operativos II", creditos: 3 },
            { nombre: "Control de Costos y Presupuesto", creditos: 3 },
            { nombre: "Matemáticas III", creditos: 5 },
            { nombre: "Estadística con Apoyo Informático", creditos: 3 },
          ],
          "II Año — Verano": [
            { nombre: "Ecología General", creditos: 3 },
            { nombre: "Geografía de Panamá", creditos: 3 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Redes Informáticas II", creditos: 3 },
            { nombre: "Arquitectura de Protocolos", creditos: 3 },
            { nombre: "Electiva I", creditos: 3 },
            { nombre: "Sistemas Operativos III", creditos: 3 },
            { nombre: "Formación de Emprendedores", creditos: 3 },
            { nombre: "Programación para Redes III", creditos: 3 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Redes Informáticas III", creditos: 3 },
            { nombre: "Fundamentos de Base de Datos", creditos: 3 },
            { nombre: "Redes Informáticas IV", creditos: 3 },
            { nombre: "Seguridad y Privacidad en Redes I", creditos: 3 },
            { nombre: "Tópicos Especiales I", creditos: 3 },
          ],
          "III Año — Verano": [
            { nombre: "Relaciones Humanas y Superv. de Personal", creditos: 3 },
            { nombre: "Metodología de la Investigación", creditos: 3 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Análisis y Diseño de Redes", creditos: 4 },
            { nombre: "Redes Informáticas V", creditos: 3 },
            { nombre: "Seguridad y Privacidad en Redes II", creditos: 3 },
            { nombre: "Electiva II", creditos: 3 },
            { nombre: "Administración de Sistemas Operativos", creditos: 3 },
            { nombre: "Gestión de Redes", creditos: 3 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
          ],
          "IV Año — Segundo Semestre": [
            { nombre: "Ética y Legislación Laboral e Informát.", creditos: 3 },
            { nombre: "Gerencia de Proyectos Informáticos", creditos: 4 },
            { nombre: "Calidad de Servicio de Redes", creditos: 3 },
            { nombre: "Eval. del Fun. de las Redes Informáticas", creditos: 3 },
            { nombre: "Admón. de Infraest. y Plat. de Redes Inf.", creditos: 3 },
            { nombre: "Tópicos Especiales II", creditos: 3 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      },

      "ciberseguridad": {
        nombre: "Ciberseguridad",
        creditos_total: 153,
        semestres: {
          "I Año — Primer Semestre": [
            { nombre: "Introducción a la Ciberseguridad", creditos: 3 },
            { nombre: "Desarrollo Lógico y Algorítmos", creditos: 4 },
            { nombre: "Matemática I", creditos: 5 },
            { nombre: "Gestión de Sistemas Operativos I", creditos: 3 },
            { nombre: "Inglés Técnico I", creditos: 3 },
          ],
          "I Año — Segundo Semestre": [
            { nombre: "Matemática II", creditos: 5 },
            { nombre: "Programación I", creditos: 3 },
            { nombre: "Sistemas Colaborativos", creditos: 3 },
            { nombre: "Gestión de Sistemas Operativos II", creditos: 3 },
            { nombre: "Redes de Computadoras I", creditos: 3 },
            { nombre: "Estructura de Datos", creditos: 3 },
          ],
          "I Año — Verano": [
            { nombre: "Redacción de Infor. Téc. y Expresión Oral", creditos: 3 },
            { nombre: "Inglés Técnico II", creditos: 3 },
            { nombre: "Geografía de Panamá", creditos: 3 },
          ],
          "II Año — Primer Semestre": [
            { nombre: "Organización del Computador", creditos: 3 },
            { nombre: "Programación II", creditos: 3 },
            { nombre: "Redes de Computadoras II", creditos: 3 },
            { nombre: "Matemáticas III", creditos: 5 },
            { nombre: "Ciberseguridad I", creditos: 3 },
            { nombre: "Base de Datos Seguras", creditos: 3 },
          ],
          "II Año — Segundo Semestre": [
            { nombre: "Desarrollo Web", creditos: 3 },
            { nombre: "Criptografía", creditos: 3 },
            { nombre: "Estadística y Probabilidades", creditos: 4 },
            { nombre: "Sistemas Embebidos", creditos: 3 },
            { nombre: "Ciberseguridad II", creditos: 3 },
          ],
          "II Año — Verano": [
            { nombre: "Ecología General", creditos: 3 },
            { nombre: "Historia de Panamá", creditos: 3 },
            { nombre: "Metodología de la Investigación", creditos: 3 },
          ],
          "III Año — Primer Semestre": [
            { nombre: "Inteligencia Artificial Apli. a la Cibers.", creditos: 3 },
            { nombre: "Contabilidad General", creditos: 3 },
            { nombre: "Ciberseguridad III", creditos: 3 },
            { nombre: "Ciberderecho: Priv., Ética y Der. Digit.", creditos: 3 },
            { nombre: "Ciberseguridad IV", creditos: 3 },
            { nombre: "Gestión de Almacenamiento de Informa.", creditos: 3 },
          ],
          "III Año — Segundo Semestre": [
            { nombre: "Ciberseguridad V", creditos: 3 },
            { nombre: "Pruebas de Pen. y Eval. de la Seguridad", creditos: 3 },
            { nombre: "Gestión de Incidentes y Análi. de Riesgo", creditos: 4 },
            { nombre: "Tópicos Especiales I", creditos: 3 },
            { nombre: "Ciberinformática", creditos: 3 },
          ],
          "III Año — Verano": [
            { nombre: "Práctica Profesional en Ciberseguridad", creditos: 5 },
          ],
          "IV Año — Primer Semestre": [
            { nombre: "Sistema de Gestión de la Ciberseguridad", creditos: 4 },
            { nombre: "Admón. y Seguridad de Entor. en la Nube", creditos: 3 },
            { nombre: "Tópicos Especiales II", creditos: 3 },
            { nombre: "Análisis de Datos Cibernéticos", creditos: 3 },
            { nombre: "Formación de Emprendedores", creditos: 3 },
            { nombre: "Trabajo de Graduación I", creditos: 3 },
            { nombre: "Trabajo de Graduación II", creditos: 3 },
          ],
        }
      }
    }
  }
};

// Exportar para uso en el HTML
if (typeof module !== 'undefined') module.exports = PENSUM;
