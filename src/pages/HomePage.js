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
    ]);

    const addTodo = (todo) => {
        if (todo.name) {
            setTodos([...todos, todo]);
        }
    }
    const deleteTodo =(id) => {
        let newTodos = todos.filter((todo)=>todo.id !== id);
        setTodos(newTodos)
    }

    const doneTodo = (id) => {
        let currentTodo = todos.find((todo) => todo.id === id);
        currentTodo.status = true;
        setTodos([...todos]);
    }
    return (
        <>
            <div className="main-container">
                <div className="todo-header">TODOs</div>
                <TodoField addTodo={addTodo}/>
                <Todos
                    todos={todos}
                    deleteTodo={deleteTodo}
                    doneTodo={doneTodo}
                />
            </div>

        </>
    )
}

export default HomePage
