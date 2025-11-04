import React from 'react'

/**
 * Banner
 * @param {{ texto?: string, children?: React.ReactNode, size?: 'small'|'large', variant?: 'default'|'plain' }} props
 *
 * Componente visual que muestra un encabezado o etiqueta (píldora) y opcionalmente
 * recibe elementos hijos (por ejemplo, el logo dentro del Banner grande).
 * - `texto`: texto que se muestra en la píldora.
 * - `size`: 'small' para banners horizontales, 'large' para banners verticales.
 * - `variant`: 'default' muestra la píldora con estilo; 'plain' muestra un banner sin marco/píldora.
 */
export default function Banner({ texto, children, size = 'small', variant = 'default' }) {
  // Construye clases CSS según props
  const textClass = `banner-text ${size === 'large' ? 'large' : 'small'}`
  const containerClass = `component banner ${size === 'large' ? 'vertical' : 'horizontal'} ${variant === 'plain' ? 'plain' : ''}`

  return (
    <div className={containerClass}>
      {texto && <p className={textClass}>{texto}</p>}
      {children}
    </div>
  )
}
