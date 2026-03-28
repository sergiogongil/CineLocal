const CACHE_NAME = 'cinelocal-v2';
// Lista de archivos básicos para que la interfaz cargue offline
const ASSETS = [
  'index.html',
  'detalle.html',
  'data.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap'
];

// Instalación: Guardar archivos en caché y activar el SW inmediatamente
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activación: Eliminar cachés antiguas para liberar espacio y evitar versiones obsoletas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((claves) => {
      return Promise.all(
        claves
          .filter((clave) => clave !== CACHE_NAME)
          .map((claveAntigua) => caches.delete(claveAntigua))
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia: Buscar en caché primero, si no, ir a la red
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});