import React from 'react'

/**
 * Header
 * @param {{ logo: string, alt?: string }} props
 *
 * Componente que muestra una imagen de logo. La imagen se pasa mediante la prop
 * `logo` y se centra dentro del contenedor.
 */
export default function Header({ logo, alt = 'logo' }) {
  return (
    <div className="component header-component">
      <img src={logo} alt={alt} className="header-logo small centered" />
    </div>
  )
}
