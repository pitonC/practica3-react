# practica3-react

Este proyecto es una práctica creada con React y Vite. Contiene un pequeño UI
con componentes (Banner, Header, Body, Footer) y está preparado para publicarse
en GitHub Pages. http://localhost:5176/practica3-react/
https://pitonc.github.io/practica3-react/

Contenido básico
- `index.html`: punto de entrada HTML donde se monta la app React. No contiene
	lógica JS; solo referencias al bundle generado por Vite.
- `src/`: código fuente React:
	- `src/main.jsx`: arranca React y monta la aplicación.
	- `src/App.jsx`: componente raíz que compone los componentes visuales.
	- `src/components/`: componentes reutilizables (Banner, Header, Body, Footer).
	- `src/App.css`: estilos principales del proyecto.
- `public/`: activos estáticos que se copian tal cual al build (por ejemplo `logo.png`).

Cómo usar (rápido)

1. Instalar dependencias:

```powershell
npm install
```

2. Ejecutar en desarrollo (Vite):

```powershell
npm run dev
```

3. Crear build de producción:

```powershell
npm run build
```

4. Desplegar a GitHub Pages (script incluido):

```powershell
npm run deploy
# o, si prefieres forzar el repo:
npx gh-pages -d dist -r https://github.com/pitonC/practica3-react.git
```

Notas importantes
- Las imágenes estáticas deben estar en `public/` (por ejemplo `public/logo.png`).
- La opción `base` en `vite.config.js` está configurada a `'/practica3-react/'`
	para que los assets apunten correctamente cuando se publica en
	`https://pitonC.github.io/practica3-react/`.
- Si la página en GitHub Pages aparece en blanco, revisa las rutas en
	`dist/index.html` y asegúrate de que los archivos JS/CSS referenciados existan.

Contribuciones
- Este repositorio es una práctica; si deseas mejorar algo, crea un fork,
	realiza cambios y abre un pull request.

Licencia
- Código de ejemplo / educativo.
