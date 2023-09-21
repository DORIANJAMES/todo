import React from 'react'

export const Todos = ({todos}) => {
    return (
        todos.length > 0 ? (
            <ul className="todos">
                {todos.map((todo) => (
                    <li className="todos__item" key={todo.id}>
                        <span className="todos__text">{todo.name}</span>
                        <div className="todos__buttons">
                            <button>X</button>
                            <button>OK</button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : null

    )
}
