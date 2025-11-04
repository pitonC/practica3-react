import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

/**
 * App
 *
 * Componente raíz de la aplicación. Presenta una estructura muy sencilla:
 * - Banner grande con logo (Header)
 * - Banner pequeño con texto
 * - Banner plain adicional
 * - Body con lista y botón de alerta
 * - Footer con enlaces
 *
 * Nota: las imágenes estáticas deben colocarse en `public/` para servirlas
 * correctamente (por ejemplo `public/logo.png`).
 */
function App() {
  const arreglo = [
    { id: 'id1', label: '- elemento 1' },
    { id: 'id2', label: '- elemento 2' },
    { id: 'id3', label: '- elemento 3' },
    { id: 'id4', label: '- elemento 4' },
    { id: 'id5', label: '- elemento 5' },
  ]

  return (
    <div className="page-root">
      {/* Banner grande: texto STEAM y logo centrado */}
      <Banner texto="STEAM" size="large">
        <Header logo="/logo.png" alt="logo-steam" />
      </Banner>

      {/* Banner pequeño: buscador de perfiles */}
      <Banner texto="BUSCADOR PERFILES" size="small" />

      {/* Banner sin estilo (plain) usado para información adicional */}
      <Banner texto="Información adicional" size="small" variant="plain" />

      {/* Body: lista de 5 elementos y botón que muestra una alerta */}
      <Body texto={"Mostrar alerta"} arreglo={arreglo} />

      {/* Footer: muestra enlace al repo y botón hacia GitHub Pages */}
      <Footer etiquetahtml={{ href: 'https://pitonC.github.io/practica3-react', text: 'Visitar GitHub Pages' }}>
        <a className="footer-pill-link" href="https://github.com/pitonC/practica3-react" target="_blank" rel="noreferrer">Proyecto: <strong>practica3-react</strong></a>
      </Footer>
    </div>
  )
}

export default App
