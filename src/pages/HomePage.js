import React from 'react'
import TodoField from "../components/TodoField";

function HomePage() {
    return (
        <>
            <div className="main-container">
                <div className="todo-header">TODOs</div>
                <TodoField/>
            </div>
        </>
    )
}

export default HomePage
