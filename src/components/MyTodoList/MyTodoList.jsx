import { useState } from "react"


const MyTodoList = () => {
const [todos, setTodos] = useState ([]);
const [newTodo, setNewTodo] = useState("")

const handleAdd = () => {
  if (newTodo.trim() !==""){
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
}
const handleChange = (e) =>{
  setNewTodo(e.target.value);
}
const handleDel = (id) =>{
  const updateTodo = todos.filter((_, i) => i !== id);
  setTodos(updateTodo);
}

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleAdd}>AAAA</button>
      <ul>
        {todos.map((todo, index) =>(
          <li key={index}>
            {todo}
            <button onClick={() => handleDel(index)}>dele</button>
          </li>
          
        ))}
      </ul>
    </div>
  )
}

export default MyTodoList