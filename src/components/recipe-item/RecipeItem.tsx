import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../store/slices/favoritesSlice";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IRecipe} from "../../types/recipe";
import {FC} from "react";

interface IRecipeItemProps {
    recipe: IRecipe
}

const RecipeItem:FC<IRecipeItemProps> = ({recipe}) => {

    const favorites = useTypedSelector(state => state.favorites)

    const {toggleFavorites} = useActions()

    console.log(favorites)
   const isExists = favorites.some(e => e.id === recipe.id)
  //  const isExists = true

    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} width={100} />
            <button onClick={() => toggleFavorites(recipe)}>
                {isExists ?
                    'Remove from favorites'
                :
                    'Add to favorites'
                }
            </button>
        </div>
    );
};

export default RecipeItem;