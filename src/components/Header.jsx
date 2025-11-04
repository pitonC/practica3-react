import React from 'react'

/**
 * Header
 * @param {{ logo: string, alt?: string }} props
 *
 * Componente que muestra una imagen de logo. La imagen se pasa mediante la prop
 * `logo` y se centra dentro del contenedor.
 */
export default function Header({ logo, alt = 'logo' }) {
  // Usar import.meta.env.BASE_URL para construir rutas que funcionen tanto
  // en desarrollo como en el build (especialmente cuando `base` está configurado
  // en vite.config.js). Si no se recibe `logo`, se toma 'logo.png' desde el
  // directorio público.
  const base = import.meta.env.BASE_URL ?? '/'
  const src = logo ? (logo.startsWith('/') ? base.replace(/\/$/, '') + logo : logo) : `${base}logo.png`

  return (
    <div className="component header-component">
      <img src={src} alt={alt} className="header-logo small centered" />
    </div>
  )
}
