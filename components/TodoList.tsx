import React from 'react'
import { Todo } from '../interfaces/todo'
import { DeleteTodo } from '../utils/supabaseFunctions'

type TodoListProps = {
  todos: Todo[]
}
const TodoList = (props: TodoListProps) => {
  const { todos } = props
  
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
    handleDelete(Number(event.currentTarget.id))
  }
  const handleDelete = async (id: number) => {    
    // Todoの削除処理
    await DeleteTodo(id)
  }
  return (
    <div>
      <ul className="mx-auto">
        {todos && todos.map((todo) => (
          <div key={todo.id} className="flex bg-cyan-200 rounded-md my-2 p-2 justify-between">
            <li className="font-medium">{todo.title}</li>
            <span className="cursor-pointer" onClick={handleClick}>×</span>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList