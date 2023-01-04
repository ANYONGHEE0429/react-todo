import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //새로운 일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    
    console.log(newTodo);

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };



  //map, filter
  //React State

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>todolist</h1>
        
        </div>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>

        
      </div>
    </div>
  );
}
