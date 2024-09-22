import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>
    <ul>
        {todos.map(todo=>(
            <li key={todo.id}> {todo.title}  </li>  
        ))}
    </ul>
  </div>;
};

export default TodoList;
