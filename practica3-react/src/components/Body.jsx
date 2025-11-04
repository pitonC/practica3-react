import React from 'react'

// Body: lista de elementos y un botón que lanza una alerta.
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
          // acción simple: alerta con el texto pasado
          alert(texto)
        }}
      >
        {texto}
      </button>
    </div>
  )
}
