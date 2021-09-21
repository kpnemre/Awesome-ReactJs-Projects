import{ configureStore}from '@reduxjs/toolkit'
import todoSlice from '../features/todoSlice'

export const store= configureStore({
    reducer:{
todos:todoSlice
    }
})




// BAŞLANGIÇ:

// import{ configureStore}from '@reduxjs/toolkit'

// const store= configureStore({
//     reducer:{

//     }
// })

// export default store;