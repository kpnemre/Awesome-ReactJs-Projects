import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState=[]


const todoSlice= createSlice({
    name: 'todos',
    initialState,
    reducers: {
todoekle:(state, action)=>{
    // { id: state.todo.length + 1, title: action.payload, done: false }
    const newTodo=  { id:uuidv4() , title: action.payload, done: false }
    state.push(newTodo);
},
todoyapıldı:(state, action)=>{
     return state.map((item)=>item.id===action.payload ?{ ...item, done: !item.done }:item)
    
},

todotemizle:(state, action)=>{
    return state.filter(item=>!item.done)
    
}
    }
})


export default todoSlice.reducer;
// actions ları export etme
export const {todoekle, todoyapıldı,todotemizle}= todoSlice.actions;
