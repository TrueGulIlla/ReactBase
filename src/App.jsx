import React from "react";
import SayHello from "./components/Props/SayHello";
import Test from "./components/Test/Test";
import Counter from "./components/Counter/Counter";
import UserList from "./components/UserList/UserList";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import MyTodoList from "./components/MyTodoList/MyTodoList";
import { Context } from "./components/Context/Context";

const App = () => {
  // let bad = "popa";
  // let tue = "killer";

  // const users = [
  //   { id: 1, name: "Alex" },
  //   { id: 2, name: "Ilia" },
  //   { id: 3, name: "Ivan" },
  // ];

  return (
    <Context>
      {/* <SayHello bad={bad} tue={tue}/>
    <Test  bad={bad} tue={tue}/> */}
      <Counter />
      {/* <UserList users={users}/> */}
      {/* <Form/> */}
      {/* <TodoList/> */}
      {/* <MyTodoList /> */}
    </Context>
  );
};

export default App;
