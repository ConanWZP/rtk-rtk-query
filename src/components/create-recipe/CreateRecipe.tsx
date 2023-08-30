import React, {FormEvent, useState} from 'react';
import {useCreateRecipeMutation} from "../../store/api/recipe.api";
import {IRecipeData} from "../../types/recipe";

const defaultRecipeValue: IRecipeData = {
    name: '',
    image: ''
}

const CreateRecipe = () => {

    const [recipe, setRecipe] = useState(defaultRecipeValue)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(recipe)
        createRecipe(recipe).then(() => setRecipe(defaultRecipeValue))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input placeholder={'Name'} value={recipe.name} onChange={(e) => setRecipe({...recipe, name: e.target.value})} />
            </label>
            <label>
                <input placeholder={'Image'} value={recipe.image} onChange={(e) => setRecipe({...recipe, image: e.target.value})} />
            </label>
            <button type={'submit'}>Create recipe</button>
        </form>
    );
};

export default CreateRecipe;