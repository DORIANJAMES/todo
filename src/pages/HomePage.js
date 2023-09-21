import React from 'react'
import TodoField from "../components/TodoField";
import {Todos} from "../components/Todos";

function HomePage() {
    return (
        <>
            <div className="main-container">
                <div className="todo-header">TODOs</div>
                <TodoField/>
            </div>
            <Todos/>
        </>
    )
}

export default HomePage
