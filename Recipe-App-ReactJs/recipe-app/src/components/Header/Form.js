import React from 'react'
import { FormContainer, Button, FoodInput, Select,  } from './HeaderStyle'

const Form = () => {

    const handleSubmit =(e)=>{
e.preventDefault();

    }

    return (
        <div>
            <h2>Form</h2>
            <FormContainer onSubmit={handleSubmit}/>
            <FoodInput type='text' placeholder="Search"/>
            <Button>Search</Button>
            <Select name="mealTypes" id="mealTypes"/>
        </div>
    )
}

export default Form
