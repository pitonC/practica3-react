Instrucciones de despliegue y uso - practica3-react

1) Añadir logo
- Coloca la imagen que me adjuntaste (pasted image 2) en la carpeta `public/` con el nombre `pasted-image-2.png`.

2) Instalar dependencias
```powershell
npm install
```

3) Ejecutar en desarrollo
```powershell
npm run dev
# abrir http://localhost:5173
```

4) Desplegar a GitHub Pages
```powershell
npm run deploy
```
- Asegúrate de que el repositorio remoto existe en GitHub bajo `pitonC/practica3-react`.
- `npm run deploy` ejecutará `predeploy` (build) y luego usará `gh-pages` para publicar `dist` en la rama `gh-pages`.

Notas
- La búsqueda actual es una demo local (simulada). Si quieres integración real con Steam API, dime y lo implemento.
- Si quieres que suba la imagen a `public/` directamente, súbela al workspace o autoriza la subida y la añado.
