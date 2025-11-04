import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

// Componente reducido: muestra únicamente el diseño de la Imagen 1
// (logo grande centrado, título y subtítulo). La imagen debe colocarse en
// `public/pasted-image-2.png` para que se sirva como `/pasted-image-2.png`.
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
      {/* Banner antes del logo: texto "STEAM" (usando Banner.props) */}
      <Banner texto="STEAM" size="large">
        {/* Header: logo (prop `logo`) - usa la imagen en public/ */}
        <Header logo="/logo.png" alt="logo-steam" />
      </Banner>

      {/* Banner debajo del logo: texto "BUSCADOR PERFILES" */}
      <Banner texto="BUSCADOR PERFILES" size="small" />

  {/* Banner adicional sin marco ni color distinto (igual que los ids) */}
  <Banner texto="Información adicional" size="small" variant="plain" />

      {/* Body: lista de 5 elementos y botón que crea una alerta */}
      <Body texto={"Mostrar alerta"} arreglo={arreglo} />

      {/* Footer: recibe children y etiquetahtml prop con el link a GitHub Pages */}
      <Footer etiquetahtml={{ href: 'https://pitonC.github.io/practica3-react', text: 'Visitar GitHub Pages' }}>
        <div className="footer-pill">Proyecto: <strong>practica3-react</strong></div>
      </Footer>
    </div>
  )
}

export default App
