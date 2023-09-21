import React, {useState} from 'react'
import TodoField from "../components/TodoField";
import {Todos} from "../components/Todos";

function HomePage() {
    const [todos, setTodos] = useState([
        {
            id:1,
            name: "gym",
            status: false,
        },
        {
            id:2,
            name:"shopping",
            status:true,
        }
    ])
    return (
        <>
            <div className="main-container">
                <div className="todo-header">TODOs</div>
                <TodoField/>
            </div>
            <Todos todos={todos}/>
        </>
    )
}

export default HomePage
