import React from 'react'

/**
 * Footer
 * @param {{ children?: React.ReactNode, etiquetahtml?: { href: string, text: string } }} props
 *
 * Pie de página simple que renderiza contenido hijo y, opcionalmente,
 * un enlace con estilo (prop `etiquetahtml`).
 */
export default function Footer({ children, etiquetahtml }) {
  return (
    <footer className="component footer-component">
      <div className="footer-children">
        {children}
      </div>
      {etiquetahtml && (
        <div className="footer-link">
          <a className="footer-link-button" href={etiquetahtml.href} target="_blank" rel="noreferrer">
            {etiquetahtml.text}
          </a>
        </div>
      )}
    </footer>
  )
}
