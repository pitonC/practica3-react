import React from 'react'

// Footer: acepta children y una prop `etiquetahtml` con { href, text }
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
