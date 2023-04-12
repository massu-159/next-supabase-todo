import { supabase } from "./supabase"

export const getAllTodos = async () => { 
  const todos = await supabase.from('Todo').select('*')
  return todos.data
}

export const AddTodo = async (title: string) => { 
  const todo = await supabase.from('Todo').insert({title: title, created_at: new Date()})
}

export const DeleteTodo = async (id: number) => { 
  const todo = await supabase.from('Todo').delete().match({id: id})
}