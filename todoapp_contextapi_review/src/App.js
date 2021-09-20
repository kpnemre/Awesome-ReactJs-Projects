import { useState, useContext } from "react";
import "./App.css";
import { TodoContext } from "./context/TodoContext";


function App() {
  const [input, setInput] = useState("");
  const {todos, setTodos}= useContext(TodoContext)
  console.log("data:", todos);

  const clickButton = () => {
    input
      ? setTodos([
          ...todos,
          { id: todos.length + 1, title: input, done: false }
        ])
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
        {todos
          ? todos.map((todo) => (
              <div
                onClick={() =>
                  setTodos(
                    todos.map((item) =>
                      item.id === todo.id ? { ...item, done: !item.done } : item
                    )
                  )
                }
                key={todo.id}
                className={todo.done ? "todo completed" : "todo"}
              >
                <p>{todo.title}</p>
                {/* <p>{JSON.stringify(todo.done)}</p> */}
              </div>
            ))
          : "Planlı Faaliyet Yok"}
      </div>
      <button
        className="btn"
        onClick={() => setTodos(todos.filter((item) => !item.done))}
      >
        Tamamlananları Temizle
      </button>
    </div>
  );
}

export default App;
