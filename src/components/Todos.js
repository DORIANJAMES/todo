import React from 'react'

export const Todos = ({todos}) => {
    return (
        todos.length > 0 ? (
            <ul className="todos">
                {todos.map((todo) => (
                    <li className="todos__item" key={todo.id}>
                        <span className="todos__text " >{!todo.status?todo.name:(<strike>{todo.name}</strike>)}</span>
                        <div className="todos__buttons">
                            <button disabled={todo.status}>OK</button>
                            <button className="close-button"><sup>X</sup></button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : null
    )
}
