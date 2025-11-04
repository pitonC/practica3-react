import React from 'react'

// Header: recibe prop `logo` (ruta) y la muestra en tamaño pequeño.
export default function Header({ logo, alt = 'logo' }) {
  return (
    <div className="component header-component">
      <img src={logo} alt={alt} className="header-logo small centered" />
    </div>
  )
}
