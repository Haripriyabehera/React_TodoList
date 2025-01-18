
export default function Todo({todo, handleDelete, handleCompleted, handleEdit}) {
    return (
        <div className="Todo">
            <input type="checkBox" 
            onChange={()=> {handleCompleted(todo.id) }}
            checked={todo.iscompleted}
            />
            <p>{todo.value}</p>
            <div className="btn">
            <button className="edit-button" onClick={()=> handleEdit(todo.id)}>Edit</button>
            <button className="delete-button" onClick={()=> handleDelete(todo.id)}>Delete</button>
            </div>
            
        </div>
    )
}

// export default function Todo({todo, handleDelete, handleCompleted, handleEdit}) {
//     return (
//         <div className="Todo">
//             <p className={`${todo.isCompleted ? "completed" : "inCompleted"}`} onClick={()=> handleCompleted(todo.id)}>{todo.value}</p>
//             <div className="btn">
//             <button className="edit-button" onClick={()=> handleEdit(todo.id)}>Edit</button>
//             <button className="delete-button" onClick={()=> handleDelete(todo.id)}>Delete</button>
//             </div>
            
//         </div>
//     )
// }