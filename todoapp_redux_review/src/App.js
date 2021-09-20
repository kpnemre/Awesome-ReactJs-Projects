import { useState } from "react";
import './App.css';
import {useDispatch,useSelector}  from 'react-redux';
import { todoekle, todotemizle, todoyapıldı } from "./action";

// const INITIAL_STATE = [];

// { id: 1, title: "Evi Temizle", done: false }

function App() {
  // const [todos, setTodos] = useState(INITIAL_STATE);
  const [input, setInput] = useState("");
  // console.log("todos:", todos);
  // console.log("input:", input);
  const todos = useSelector((state) => state.todo);
  // console.log(todos);
  const dispatch = useDispatch();
  const clickButton = () => {
    input?
    //  setTodos([
    //       ...todos,
    //       { id: todos.length + 1, title: input, done: false },
    //     ])
dispatch(todoekle(input))

      : alert("Input giriniz");
    setInput("");
  };
  return (
    <div className="App">
      <div className="head">
      <h1>Yapılacaklar Listesi</h1>

      </div>

      <div className="todo-input">
      <input
      className="input"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="btn" onClick={() => clickButton()}>Ekle</button>
      </div>
      <div className="todos">
        {todos
          ? todos.map((item) => (
              <div
                onClick={() =>

                  dispatch(todoyapıldı(item.id))
                }
                key={item.id}
                className={item.done ? "todo completed" : "todo"}
              >
                <p>{item.title}</p>
                {/* <p>{JSON.stringify(todo.done)}</p> */}
                
              </div>
            ))
          : "Planlı Faaliyet Yok"}
      </div>
      <button className="btn" onClick={()=> dispatch(todotemizle(todos))}>Tamamlananları Temizle</button>
    </div>
  );
}

export default App;
