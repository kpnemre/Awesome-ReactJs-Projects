import React,{useState} from 'react'
import Header from '../../components/Header/Header'
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from './HomeStyle';
import RecipeCardComp from './RecipeCardComp';
import homeSvg from "../../assests/home.svg";
	

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];



const Home = () => {
    const { REACT_APP_APP_ID, REACT_APP_API_KEY } = process.env;

  const [query, setQuery] = useState("apple");
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());


  const url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_APP_ID}&app_key=${REACT_APP_API_KEY}&mealType=${meal}`;
 
 
  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
        console.log("result:", result);
      if (result.status === 200) {
        console.log(result.data.hits);
        setRecipes(result.data.hits)
      }
    } else {
      alert("Please fill the form");
    }
  };

  return (
    <div>
      <Header 
          setQuery={setQuery} 
          query={query}
          getData={getData} 
          mealTypes={mealTypes}  
          setMeal={setMeal}  
          meal={meal}
      />
      {recipes ? (
        <MainContainer>
          {recipes?.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe?.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
        <HomeImg src={homeSvg} />
      </ImgDiv>
      )}
    </div>
  );
};
export default Home;


