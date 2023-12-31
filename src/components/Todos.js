import React from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Todos = ({todos, deleteTodo, doneTodo}) => {
    return (
        todos.length > 0 ? (
            <ul className="todos">
                {todos.map((todo) => (
                    <li className="todos__item" key={todo.id}>
                        <span className="todos__text " >{!todo.status?todo.name:(<strike>{todo.name}</strike>)}</span>
                        <div className="todos__buttons">
                            <button
                                disabled={todo.status}
                                onClick={()=>doneTodo(todo.id)}
                            ><FontAwesomeIcon icon={icon({name: 'circle-check'})}/></button>
                            <button
                                className="close-button"
                                onClick={()=>deleteTodo(todo.id)}
                            ><FontAwesomeIcon icon={icon({name: 'circle-xmark'})}/></button>
                        </div>
                    </li>
                ))}
            </ul>
        ) : null
    )
}
