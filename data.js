/**
 * CINELOCAL — Base de datos de películas
 * =======================================
 * Añade una nueva entrada por cada película siguiendo la estructura del ejemplo.
 *
 * Campos OBLIGATORIOS:
 *   titulo    {string}  — Nombre de la película tal como aparecerá en la app.
 *   carpeta   {string}  — Nombre exacto del subdirectorio dentro de /peliculas/.
 *   genero    {string}  — Género (se usa para filtrar y buscar).
 *   puntuacion {number} — Valoración sobre 10 (ej: 7.4). Se muestra como estrellas sobre 5.
 *   anio      {number}  — Año de estreno (ej: 2004).
 *   caratula  {string}  — Nombre del archivo de imagen dentro de la carpeta (formato .jpg).
 *   archivo   {string}  — Nombre del archivo de vídeo principal (formato .mp4).
 *   descripcion {string}— Sinopsis breve que se muestra en el catálogo y en detalle.
 *
 * Estructura de carpetas esperada:
 *   peliculas/
 *     └── [carpeta]/
 *           ├── [caratula]   (imagen.jpg recomendado, relación de aspecto 2:3)
 *           └── [archivo]    (video.mp4)
 *
 * Notas:
 *   - La duración real del vídeo se captura automáticamente al visitar la página
 *     de detalle; no hace falta añadirla aquí.
 *   - Si tienes una versión en baja calidad, nómbrala "video_bajo.mp4" en la misma
 *     carpeta (no se usa actualmente pero se reserva para uso futuro).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PELÍCULAS DE EJEMPLO — Dominio público
 * ─────────────────────────────────────────────────────────────────────────────
 * Las entradas de abajo corresponden a clásicos del cine en dominio público.
 * Puedes descargar los archivos de vídeo y carátulas gratuitamente y de forma
 * legal desde https://archive.org/details/feature_films
 *
 * Para cada película:
 *   1. Crea la carpeta correspondiente dentro de /peliculas/
 *   2. Descarga el MP4 y renómbralo a "video.mp4"
 *   3. Descarga o crea una carátula JPG (2:3) y nómbrala "imagen.jpg"
 *   4. ¡Listo! La entrada ya está configurada abajo.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const peliculas = [

  // ── PELÍCULAS DE DOMINIO PÚBLICO (ejemplos) ──────────────────────────────

  {
    titulo: "Nosferatu",
    carpeta: "nosferatu",
    genero: "Terror",
    puntuacion: 7.9,
    anio: 1922,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "La película de terror más influyente de la historia del cine mudo. El conde Orlok —vampiro de aspecto grotesco— viaja desde Transilvania a Alemania sembrando la muerte a su paso. Una obra maestra del expresionismo alemán dirigida por F.W. Murnau."
  },

  {
    titulo: "Metropolis",
    carpeta: "metropolis",
    genero: "Ciencia ficción",
    puntuacion: 8.3,
    anio: 1927,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "En una ciudad futurista dividida entre una élite que vive en rascacielos y obreros que trabajan en las entrañas de la tierra, el hijo del gobernante descubre la injusticia y se alía con una líder obrera. La obra cumbre de Fritz Lang y pionera de la ciencia ficción cinematográfica."
  },

  {
    titulo: "El Maquinista de la General",
    carpeta: "the_general",
    genero: "Comedia",
    puntuacion: 8.1,
    anio: 1926,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "Durante la Guerra Civil americana, Johnnie Gray persigue en su locomotora a los espías de la Unión que le han robado su tren. Buster Keaton dirige y protagoniza esta comedia de acción física virtuosa que muchos consideran la película muda más perfecta jamás filmada."
  },

  {
    titulo: "Tiempos Modernos",
    carpeta: "tiempos_modernos",
    genero: "Comedia",
    puntuacion: 8.5,
    anio: 1936,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "El Vagabundo de Chaplin lucha por sobrevivir en la era de la industrialización masiva. Una sátira genial y emotiva sobre la deshumanización del trabajo, el paro y la pobreza, que mezcla el cine mudo con los primeros compases del sonoro. Considerada una de las mejores películas de la historia."
  },

  {
    titulo: "El Gran Dictador",
    carpeta: "el_gran_dictador",
    genero: "Drama",
    puntuacion: 8.4,
    anio: 1940,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "La primera película sonora de Chaplin es una feroz sátira del nazismo. Un barbero judío y el dictador Adenoid Hynkel —idénticos en apariencia— protagonizan un equívoco que deriva en uno de los discursos más poderosos de la historia del cine."
  },

  {
    titulo: "El Nacimiento de una Nación",
    carpeta: "birth_of_a_nation",
    genero: "Drama",
    puntuacion: 6.3,
    anio: 1915,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "Épica de D.W. Griffith sobre la Guerra Civil americana y la Reconstrucción, narrada desde la perspectiva de dos familias enfrentadas. Técnicamente revolucionaria —inventó el lenguaje cinematográfico moderno—, aunque tristemente conocida también por su contenido racista hacia la comunidad afroamericana."
  },

  {
    titulo: "La Quimera del Oro",
    carpeta: "la_quimera_del_oro",
    genero: "Comedia",
    puntuacion: 8.2,
    anio: 1925,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "El Vagabundo de Chaplin busca fortuna en el Klondike durante la fiebre del oro. La escena de la danza de los panecillos y la del zapato hervido son dos de los momentos más memorables de la historia del cine. Una comedia perfecta que mezcla humor y ternura en partes iguales."
  },

  {
    titulo: "Amanecer",
    carpeta: "amanecer",
    genero: "Romance",
    puntuacion: 8.0,
    anio: 1927,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "Un granjero, seducido por una mujer de ciudad para que asesine a su esposa, acaba redescubriendo el amor por ella en una visita a la gran ciudad. Obra maestra absoluta de F.W. Murnau, primer ganadora del Oscar a Mejor Dirección y considerada la película más bella del cine mudo."
  },

  // ── AÑADE TUS PROPIAS PELÍCULAS AQUÍ ─────────────────────────────────────
  // Borra o comenta las entradas de ejemplo de arriba cuando añadas tu colección.
  // Copia y pega el siguiente bloque por cada película y rellena los campos:
  //
  // {
  //   titulo: "",
  //   carpeta: "",
  //   genero: "",
  //   puntuacion: 0.0,
  //   anio: 0000,
  //   caratula: "imagen.jpg",
  //   archivo: "video.mp4",
  //   descripcion: ""
  // },

];
