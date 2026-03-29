<div align="center">

<img src="icono-512.png" alt="CineLocal Logo" width="120"/>

# CineLocal

**Tu propia plataforma de cine. Sin suscripciones. Sin internet. Sin límites.**

[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-red.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Listo-brightgreen.svg)](manifest.json)
[![Sin backend](https://img.shields.io/badge/Backend-Ninguno-blue.svg)](#)
[![100% Offline](https://img.shields.io/badge/Offline-100%25-orange.svg)](#)

</div>

---

> **CineLocal está pensada exclusivamente para cinéfilos** que tienen su colección de películas digitalizada y quieren disfrutarla con la elegancia y comodidad de las grandes plataformas de streaming, pero **de forma totalmente local**, sin depender de suscripciones mensuales, sin conexión a internet y sin ninguna configuración de servidor compleja.
>
> Si tienes tus películas en un disco duro y un navegador web, ya tienes todo lo que necesitas.

---

## ¿Qué es CineLocal?

CineLocal es una **Progressive Web App (PWA)** de videoteca personal que transforma una carpeta con tus películas digitalizadas en una plataforma de cine privada con diseño estilo Netflix. Todo funciona directamente en tu navegador — sin instalar nada, sin servidores, sin base de datos, sin cloud.

### Características principales

**Catálogo y navegación**
- Catálogo visual de carátulas con carga progresiva (infinite scroll)
- Banner/carrusel de las películas más recientes con vista previa en vídeo
- Filtrado por género, favoritas o pendientes de ver
- Búsqueda en tiempo real por título, género o descripción
- Ordenación por puntuación, título (A-Z) o año
- Sección "Seguir viendo" para reanudar películas a mitad
- Sección "Podría interesarte" con recomendaciones basadas en tu historial

**Gestión personal**
- Marcar películas como vistas, favoritas o descartadas
- Puntuación personal de 1 a 5 estrellas por película
- Registro automático de la fecha de última visualización
- Duración visible en las tarjetas (se captura al visitar el detalle)
- Estadísticas personales: películas vistas, tiempo en pantalla, géneros preferidos...
- Exportar e importar todas tus preferencias en un archivo `.json`

**Multi-usuario**
- Soporte para múltiples perfiles de usuario en el mismo dispositivo
- Cada usuario tiene su propio historial, favoritas, valoraciones y estadísticas
- Datos completamente aislados entre perfiles (localStorage con namespacing)

**Diseño y experiencia**
- Diseño oscuro estilo plataforma premium, totalmente responsive
- Adaptado para móvil, tablet y escritorio
- Instalable como app en el escritorio o en el móvil (PWA)
- Funciona 100% offline una vez cargada

**Técnica**
- Sin backend, sin servidor, sin base de datos
- Solo HTML, CSS y JavaScript puro
- Service Worker para caché offline
- Todos los datos del usuario se guardan en `localStorage` del navegador

---

## Capturas de pantalla

![Captura](https://github.com/user-attachments/assets/db296d7f-35c0-46f2-9558-ef317f03b24f)

---

## Requisitos

- Un ordenador, tablet o móvil con navegador moderno (Chrome, Firefox, Edge, Safari)
- Tus películas en formato **MP4**
- Sus carátulas en formato **JPG** (relación de aspecto 2:3 recomendada — tipo póster)
- Ningún otro requisito

---

## Instalación y configuración

### 1. Descarga el proyecto

```bash
git clone https://github.com/TU_USUARIO/CineLocal.git
```

O descarga el ZIP desde GitHub y extráelo donde quieras.

### 2. Organiza tus películas

Dentro de la carpeta del proyecto encontrarás el directorio `peliculas/`. Crea una subcarpeta por cada película con el nombre que quieras (sin espacios, preferiblemente) y coloca dentro la carátula y el archivo de vídeo:

```
CineLocal/
├── index.html
├── detalle.html
├── data.js
├── sw.js
├── manifest.json
└── peliculas/
    ├── el_padrino/
    │   ├── imagen.jpg      ← Carátula (relación 2:3, ej. 400×600px)
    │   └── video.mp4       ← Película en MP4
    ├── pulp_fiction/
    │   ├── imagen.jpg
    │   └── video.mp4
    └── ...
```

### 3. Edita el catálogo

Abre el archivo `data.js` con cualquier editor de texto (Bloc de notas, VS Code, etc.) y añade una entrada por cada película siguiendo esta estructura:

```javascript
const peliculas = [
  {
    titulo: "El Padrino",
    carpeta: "el_padrino",          // Nombre exacto de la subcarpeta
    genero: "Drama",
    puntuacion: 9.2,                // Sobre 10
    anio: 1972,
    caratula: "imagen.jpg",         // Nombre del archivo de imagen
    archivo: "video.mp4",           // Nombre del archivo de vídeo
    descripcion: "La historia de la familia Corleone, una de las familias de la mafia más poderosas de Nueva York."
  },
  {
    titulo: "Pulp Fiction",
    carpeta: "pulp_fiction",
    genero: "Crimen",
    puntuacion: 8.9,
    anio: 1994,
    caratula: "imagen.jpg",
    archivo: "video.mp4",
    descripcion: "Las vidas de dos mafiosos, un boxeador, un gángster y su esposa se entrelazan en cuatro historias de violencia y redención."
  }
  // Añade tantas películas como quieras...
];
```

**Géneros disponibles** (puedes usar los que quieras, se generan automáticamente):
Acción, Aventura, Animación, Ciencia ficción, Comedia, Crimen, Drama, Documental, Terror, Fantasía, Romance, Thriller, Western...

### 4. Abre la aplicación

Simplemente abre el archivo `index.html` en tu navegador. No necesitas ningún servidor web ni configuración adicional.

```
Doble clic en index.html → Se abre en tu navegador → ¡Listo!
```

> **Nota:** Para que la reproducción de vídeo funcione correctamente en todos los navegadores, especialmente en Firefox, se recomienda servir los archivos a través de un servidor web local ligero. Con Python es trivial:
>
> ```bash
> # Desde la carpeta del proyecto:
> python3 -m http.server 8080
> # Luego abre: http://localhost:8080
> ```
>
> Con Chrome y Edge el doble clic directo sobre `index.html` suele funcionar sin problemas.

### 5. (Opcional) Instalar como app

Desde Chrome o Edge, visita la app y haz clic en el icono de instalación que aparece en la barra de direcciones. CineLocal se instalará como una app de escritorio o en tu móvil y funcionará offline.

---

## Estructura del proyecto

```
CineLocal/
│
├── index.html          → Catálogo principal (toda la lógica de la app)
├── detalle.html        → Página de detalle y reproducción de cada película
├── data.js             → Base de datos de tu colección (edita este archivo)
├── sw.js               → Service Worker para funcionamiento offline
├── manifest.json       → Configuración PWA (nombre, icono, colores)
├── icono-192.png       → Icono de la app (192×192)
├── icono-512.png       → Icono de la app (512×512)
│
└── peliculas/          → Tu colección de películas
    └── [nombre]/
        ├── imagen.jpg  → Carátula
        └── video.mp4   → Archivo de vídeo
```

---

## Cómo funciona por dentro

CineLocal no usa ningún servidor ni base de datos. Todo ocurre en el navegador:

- **`data.js`** es el único archivo que necesitas editar. Contiene el catálogo en forma de array de objetos JavaScript.
- **`localStorage`** almacena todos los datos del usuario (favoritas, vistas, progreso, valoraciones, estadísticas), con namespacing por perfil para soportar múltiples usuarios.
- El **Service Worker** (`sw.js`) cachea los archivos de la interfaz para que funcione offline. Los vídeos y carátulas se sirven directamente desde disco.
- La **duración real** de cada película se captura automáticamente la primera vez que visitas su página de detalle (el navegador lee los metadatos del MP4).

---

## Preguntas frecuentes

**¿Puedo usarlo en varios dispositivos?**
Sí, pero cada dispositivo tendrá sus propios datos (el `localStorage` es local al navegador). Puedes usar la función de **Exportar/Importar preferencias** del menú para transferir tu historial entre dispositivos.

**¿Qué pasa con mis datos si limpio el navegador?**
Los datos de usuario se borrarán. Usa la exportación de preferencias antes de limpiar el navegador para no perder tu historial.

**¿Puedo añadir subtítulos?**
Actualmente no está implementado. Si los subtítulos están integrados en el MP4 (burned-in), se mostrarán con el vídeo.

**¿Funciona en red local (NAS, Raspberry Pi)?**
Perfectamente. Puedes servir la carpeta del proyecto desde cualquier servidor HTTP ligero en tu red local (Python, Nginx, Apache) y acceder desde cualquier dispositivo de tu casa.

**¿Qué formatos de vídeo soporta?**
Los que soporte tu navegador, principalmente **MP4 con H.264**. Es el formato más compatible. MKV y otros contenedores pueden no funcionar en todos los navegadores.

**¿Puedo usarlo con películas en streaming online?**
No. CineLocal está diseñada para películas que ya tienes descargadas en tu disco. No reproduce contenido en streaming de internet.

---

## Películas de dominio público (para probar)

Si quieres probar CineLocal sin usar tus propias películas, puedes descargar títulos clásicos en dominio público de forma totalmente legal desde:

- [archive.org/details/feature_films](https://archive.org/details/feature_films) — Miles de películas clásicas en dominio público
- [publicdomainmovies.net](https://publicdomainmovies.net) — Colección curada de clásicos
- [opensea.io](https://archive.org) — Archivo de Internet

Algunos títulos recomendados (todos en dominio público):

| Título | Año | Género |
|---|---|---|
| Nosferatu | 1922 | Terror |
| Metropolis | 1927 | Ciencia ficción |
| El maquinista de La General | 1926 | Comedia / Aventura |
| Tiempos Modernos | 1936 | Comedia |
| El Gran Dictador | 1940 | Comedia / Drama |
| Drácula (versión española) | 1931 | Terror |

---

## Contribuir

Las contribuciones son bienvenidas. Si tienes ideas para nuevas funcionalidades, mejoras de diseño o corrección de errores:

1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b feature/mi-mejora`
3. Realiza tus cambios y haz commit: `git commit -m 'Añade mi mejora'`
4. Sube la rama: `git push origin feature/mi-mejora`
5. Abre un Pull Request

---

## Licencia

Este proyecto está bajo la **Licencia MIT**. Puedes usarlo, modificarlo y distribuirlo libremente, incluso para uso comercial, siempre que mantengas el aviso de copyright.

Ver [LICENSE](LICENSE) para más detalles.

---

<div align="center">

Hecho con ❤️ para cinéfilos, por cinéfilos.

*"No necesitas Netflix cuando tienes tu propia colección."*

</div>
