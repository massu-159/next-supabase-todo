import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import { AddTodo, getAllTodos } from '../utils/supabaseFunctions'


const TodoApp = () => {
  const [todos, setTodos] = useState<any>([])
  const [title, setTitle] = useState<string>('')
  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos()
      setTodos(todos)
    }
    getTodos()
  }, [])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    if(title === '') return 
    // Todoの追加処理
      await AddTodo(title)
    let todos = await getAllTodos()
    setTodos(todos)
    setTitle('')
  }
    return (
    <section className='text-center mb-2 text-2xl font-medium'>
      <h3>Todo App</h3>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" className='shadow-lg p-1 mr-2 outline-none' onChange={(e)=>setTitle(e.target.value)}/>
        <button className="shadow-md border-2 p-1 rounded-lg bg-cyan-300">Add</button>
      </form>
      <TodoList todos={todos}></TodoList>
    </section>
  )
}

export default TodoApp