import { useHistory } from "react-router";
import { RecipeCard, RecipeHeader,RecipeImage,Button} from './HomeStyle';
import defaultImg from '../../assests/default-image.jpg';

const RecipeCardComp = ({ recipe }) => {
    // console.log(recipe)
    const history = useHistory();
    const moreClick = () => {
      // history.push("/view")
      history.push({
        pathname: '/details',
        recipe: recipe,
        // PROPS gönderiyoruz bu sayfaya
      });
    };
    return (
      <RecipeCard>
        <RecipeHeader>{recipe?.label}</RecipeHeader>
        <RecipeImage src={recipe?.image ?? defaultImg} alt="" /> 
        <Button onClick={moreClick}>View More</Button>
      </RecipeCard>
    );
  };
  export default RecipeCardComp;