import React from 'react'

export default function Banner({ texto, children, size = 'small', variant = 'default' }) {
  // size: 'small' | 'large' - default small
  // variant: 'default' | 'plain' - 'plain' removes pill/background
  const textClass = `banner-text ${size === 'large' ? 'large' : 'small'}`
  const containerClass = `component banner ${size === 'large' ? 'vertical' : 'horizontal'} ${variant === 'plain' ? 'plain' : ''}`
  return (
    <div className={containerClass}>
      {texto && <p className={textClass}>{texto}</p>}
      {children}
    </div>
  )
}
