
export const EKLE= 'EKLE';
export const TEMIZLE= 'TEMIZLE';
export const YAPILDI= 'YAPILDI';


export const todoekle=(text)=>{

    return{type:EKLE, payload:text}
}

export const todoyapıldı=(id)=>{
    return{type:YAPILDI, payload:id}
}

export const todotemizle=(alltodos)=>{

    return{type:TEMIZLE, payload:alltodos}
}