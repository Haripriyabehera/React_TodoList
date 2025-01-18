import { useState } from "react"
export default function EditTodoForm({handleEdit, todo}) {
    const [value, setValue] = useState(todo.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        handleEdit(value, todo.id)
    }
    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder="Update Task...."
            />
            <button type="submit" className="todo-btn">ADD</button>
        </form>
    )
}