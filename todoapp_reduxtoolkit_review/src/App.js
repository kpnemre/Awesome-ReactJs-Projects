import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import "./App.css";
import { todoekle, todotemizle, todoyapıldı } from "./features/todoSlice";
// const INITIAL_STATE = [];

// { id: 1, title: "Evi Temizle", done: false }

function App() {
  const todos = useSelector((state) => state.todos)
  console.log("todos:",todos);
const dispatch = useDispatch();
  // const [todos, setTodos] = useState(INITIAL_STATE);
  const [input, setInput] = useState("");


  const clickButton = () => {
    input
      ? dispatch(todoekle(input))
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
        <button className="btn" onClick={() => clickButton()}>
          Ekle
        </button>
      </div>
      <div className="todos">
        {todos[0]
          ? todos.map((todo) => (
              <div
                onClick={() =>
                  dispatch(todoyapıldı(todo.id))
                }
                key={todo.id}
                className={todo.done ? "todo completed" : "todo"}
              >
                <p>{todo.title}</p>
                {/* <p>{JSON.stringify(todo.done)}</p> */}
              </div>
            ))
          : (<div className="todo">
          <p>Planlı Faaliyet mevcut değil</p></div>)}
      </div>
      <button
        className="btn"
        onClick={() => dispatch(todotemizle())}
      >
        Tamamlananları Temizle
      </button>
    </div>
  );
}

export default App;
