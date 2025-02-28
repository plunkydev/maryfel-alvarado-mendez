// src/manifest.js
import logo192 from './assets/webmanifestLogo192x192.png';
import logo512 from './assets/webmanifestLogo512x512.png';

const manifest = {
  "name": "Maryfel Alvarado Méndez",
  "short_name": "Maryfel",
  "start_url": "http://localhost:8080/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ffffff",
  "icons": [
    {
      "src": logo192,
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": logo512,
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
};

export default manifest;
