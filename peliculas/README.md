# Carpeta de películas

Esta carpeta contiene tu colección de películas. Cada película va en su propia subcarpeta.

## Estructura esperada

```
peliculas/
└── nombre_pelicula/
    ├── imagen.jpg    ← Carátula (relación de aspecto 2:3, ej. 400×600px)
    └── video.mp4     ← Vídeo en formato MP4 (H.264 recomendado)
```

## Películas de ejemplo (dominio público)

Las subcarpetas de esta carpeta corresponden a clásicos del cine en dominio público.
Descarga los archivos desde **https://archive.org/details/feature_films** de forma gratuita y legal.

| Carpeta | Película | Año | Descarga |
|---|---|---|---|
| `nosferatu/` | Nosferatu | 1922 | [archive.org](https://archive.org/details/Nosferatu_201405) |
| `metropolis/` | Metropolis | 1927 | [archive.org](https://archive.org/details/Metropolis_1927) |
| `the_general/` | El Maquinista de la General | 1926 | [archive.org](https://archive.org/details/TheGeneral_753) |
| `tiempos_modernos/` | Tiempos Modernos | 1936 | [archive.org](https://archive.org/details/ModernTimes_201802) |
| `el_gran_dictador/` | El Gran Dictador | 1940 | [archive.org](https://archive.org/details/TheGreatDictator_201608) |
| `birth_of_a_nation/` | El Nacimiento de una Nación | 1915 | [archive.org](https://archive.org/details/birth_of_a_nation04) |
| `la_quimera_del_oro/` | La Quimera del Oro | 1925 | [archive.org](https://archive.org/details/TheGoldRush) |
| `amanecer/` | Amanecer | 1927 | [archive.org](https://archive.org/details/Sunrise1927) |

## Pasos para añadir una película

1. Descarga el MP4 → renómbralo a `video.mp4` → colócalo en su carpeta
2. Descarga o crea una carátula JPG → renómbrala a `imagen.jpg` → misma carpeta
3. Verifica que la entrada en `data.js` usa exactamente el mismo nombre de carpeta
4. Recarga `index.html` en el navegador

> **Nota:** Los archivos de vídeo e imágenes están excluidos del repositorio Git (ver `.gitignore`).
> Esta carpeta solo contiene la estructura y este README como guía.
