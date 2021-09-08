import React from "react";
import { FormContainer, Button, FoodInput, Select } from "./HeaderStyle";

const Form = ({ setQuery, query, getData, mealTypes, setMeal, meal }) => {
  const handleSubmit = (e) => {
    e.preventDefault("query:", query);
    getData();
  };
const handleChange =(e)=>{
    setMeal(e.target.value)
}
  return (
    <div>
      <h2>Form</h2>
      <FormContainer onSubmit={handleSubmit} >
      <FoodInput type="text" placeholder="Search" value={query} onChange={(e)=> setQuery(e.target.value)} />
      <Button>Search</Button>

      <Select name="mealTypes" id="mealTypes" onChange={handleChange}>

{
    mealTypes?.map((item,index)=>(
<option value={item.toLowerCase()} key={index}>{item}</option>
    ))
}
      </Select>
      </FormContainer>
    </div>
  );
};

export default Form;
