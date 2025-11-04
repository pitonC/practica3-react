import React from 'react'

/**
 * Body
 * @param {{ texto?: string, arreglo?: Array<{id: string, label: string}> }} props
 *
 * Componente que muestra una lista de items (centrada) y un botón principal.
 * El botón por ahora lanza una alerta con el texto recibido en `texto`.
 */
export default function Body({ texto = 'Alerta', arreglo = [] }) {
  return (
    <div className="component body-component">
      <ul className="items-list">
        {arreglo.map((it) => (
          <li key={it.id} id={it.id} className="item-row">
            <strong>{it.id}</strong> {it.label}
          </li>
        ))}
      </ul>

      <button
        className="primary-btn"
        onClick={() => {
          // acción simple: muestra una alerta con el texto pasado
          alert(texto)
        }}
      >
        {texto}
      </button>
    </div>
  )
}
