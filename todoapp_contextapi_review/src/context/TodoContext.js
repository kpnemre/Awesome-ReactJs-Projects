import { createContext, useState} from "react";

export const TodoContext =createContext();

const INITIAL_STATE = [];

export const TodoProvider=({children})=>{
    const [todos, setTodos] = useState(INITIAL_STATE)
    const values={
        todos,setTodos
    }
return(
    <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>
)
}