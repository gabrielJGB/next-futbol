import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fútbol 1',
    short_name: 'Fútbol 1',
    description: 'Fútbol 1 tiene los resultados en vivo de todas las ligas del mundo, formaciones, noticias, fixtures, estadísticas, videos y mucho más.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    categories: ["deportes", "sports", "futbol", "football", "soccer"],
    screenshots: [
      {
        "src": "/screenshot_1.png",
        "sizes": "390x844",
        "type": "image/webp",
        "form_factor": "wide",
        "label": "Pantalla de inicio"
      },
      {
        "src": "/screenshot_2.png",
        "sizes": "390x844",
        "type": "image/webp",
        "form_factor": "wide",
        "label": "Pantalla de partido"
      },
      {
        "src": "/screenshot_3.png",
        "sizes": "390x844",
        "type": "image/webp",
        "form_factor": "wide",
        "label": "Pantalla de partido"
      },
      {
        "src": "/screenshot_4.png",
        "sizes": "390x844",
        "type": "image/webp",
        "form_factor": "wide",
        "label": "Pantalla de partido"
      },


    ],
    icons: [
      {
        src: '/icons/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}