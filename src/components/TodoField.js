import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

function TodoField({addTodo}) {
    const [value, setValue] = useState('')
const addWithClick = () => {
        addTodo(
            {
                id: uuidv4(),
                name: value,
                status: false,
            });
            setValue('');
    }
    return (
        <>
            <div className="todoField">
                <input

                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    className="todoField__input"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTodo({
                                id: uuidv4(),
                                name: value,
                                status: false
                            });
                            setValue('');
                        }
                    }}
                />
                <button onClick={() =>addWithClick()} className="todoField__btn">Add
                </button>
            </div>
        </>
    )
}

export default TodoField
