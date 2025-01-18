import { useState } from "react"
import TodoForm from "./TodoForm"
import EditTodoForm from "./EditTodoForm"
import Todo from "./Todo"
export default function TodoWrapper() {
    const [todos, setTodos] = useState([])

    // Add todo
    const handleAdd = (todo) => {
        setTodos([...todos, todo])
        console.log("Updated Todos:", [...todos, todo])
    }
     
    //Delete Todo
    const handleDelete= (id) => setTodos(todos.filter((todo) => todo.id !== id))

    //Completed Todo
    const handleCompleted = (id) => { 
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isCompleted:!todo.isCompleted} : todo))
    }

    //Edit todo
    const handleEdit = (id) => {
        setTodos(todos.map((todo)=> todo.id === id ? {...todo, isEditing:!todo.isEditing} : todo))
    }

    //EditingTodo from
    const editTask = (value, id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, value, isEditing:!todo.isEditing} : todo))
    }
    
    return (
        <div className="TodoWrapper">
            <h1>TodoWrapper</h1>
            <TodoForm handleAdd={handleAdd}/>
            {todos.map((todo) =>  todo.isEditing ? (<EditTodoForm handleEdit={editTask} todo={todo} key={todo.id}/>) : (<Todo
                key={todo.id}
                todo={todo}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
            />)
            )}
        </div>
    )
}