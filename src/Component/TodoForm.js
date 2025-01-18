import {useState} from 'react'
export default function TodoForm({handleAdd}) {
    const [value, setValue]  = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const todo = {
            id: Number(new Date()),
            value: value,
            isCompleted: false,
            isEditing: false
        }
        console.log(todo)
        handleAdd(todo)
        setValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='TodoForm'>
                <input 
                    type="text"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    className='todo-input'
                    placeholder='Enter your task here...'
                />
                <button
                    type='submit' 
                    className='todo-btn'
                    >ADD</button>
            </form>
        </div>
    )
}