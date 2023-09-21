import React from 'react'

export const Todos = () => {
    return (
        <ul className="todos">
            <li className="todos__item">
                <span className="todos__text">Deneme TODO</span>
                <div className="todos__buttons">
                    <button>X</button>
                    <button>OK</button>
                </div>
            </li>
        </ul>
    )
}
