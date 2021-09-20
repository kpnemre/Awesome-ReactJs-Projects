import { EKLE, TEMIZLE, YAPILDI } from "../action";

const INITIAL_STATE = {
    todo:[{ id: 1, title: "Evi Temizle", done: false }]
};


export const reducer =(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case EKLE:
            return{
               ...state,todo:[...state.todo, 
                { id: state.todo.length + 1, title: action.payload, done: false }
               ]
            }
            case TEMIZLE:
                return{
                   ...state,todo:[...state.todo.filter(item=>!item.done)  ]
                }    
            case YAPILDI:
            console.log("Yapıldı çalışıyor" );
                    return{
                        ...state, todo: state.todo.map((item)=>
                            item.id===action.payload ?{ ...item, done: !item.done }:item
                        )  
                    }       
            default: return state;       
    }

}