import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRecipe} from "../../types/recipe";



// Define the initial state using that type
const initialState: IRecipe[] = []

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: recipe}: PayloadAction<IRecipe>) => {

            const isExists = state.some(e => e.id === recipe.id)


            if (isExists) {

                const index = state.findIndex(item => item.id === recipe.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }

            } else {
                state.push(recipe)
            }

        },


    }
})

export const {actions, reducer} = favoriteSlice