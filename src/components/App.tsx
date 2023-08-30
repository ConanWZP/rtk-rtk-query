import RecipeItem from "./recipe-item/RecipeItem";
import {useDispatch, useSelector} from "react-redux";
import {BsChatLeftHeartFill} from "react-icons/bs";
import {useActions} from "../hooks/useActions";
import {getUserById} from "../store/slices/user/userThunk";
import {useGetRecipesQuery} from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useState} from "react";


function App() {
    const skipIFSomeConditionIsTrue = true
    const favorites = useTypedSelector(state => state.favorites)
    const {isLoading, error, user} = useTypedSelector(state => state.user)

    const {getUserById} = useActions()

    const [searchText, setSearchText] = useState('')
    const [queryText, setQueryText] = useState('')

    const handleSearch = () => {
        setQueryText(searchText)
    }

    // Использование хука = отправка запроса
    const {data: recipes, isLoading: recipesLoading, error: recipesError} = useGetRecipesQuery(
        queryText,
        /*{
            skip: skipIFSomeConditionIsTrue
        }*/
    )
    //  console.log(recipes)



    return (
        <section>
            <header>
                <BsChatLeftHeartFill/>
                <span>{favorites.length}</span>
            </header>
            <CreateRecipe/>

            <div>
                <input type={'search'} value={searchText} onChange={e => setSearchText(e.target.value)} placeholder={'Enter text'}/>
                <button onClick={handleSearch}>Search</button>
            </div>

            <div>
                {
                    isLoading ? <div>Loading...</div> : error ? <div>{error}</div> : user.name ?
                        <span>User: {user.name}</span> : <h2>User not found</h2>
                }

            </div>
            <button onClick={() => getUserById(1)}>Get User</button>
            {
                recipesLoading ? <div>Loading recipes...</div>
                    :
                    recipes ? recipes.map(recipe => (
                            <RecipeItem key={recipe.id} recipe={recipe}/>
                        ))
                        : recipesError ? <div>{recipesError}</div> : <div>Recipes not found</div>
            }
        </section>
    )
}

export default App
