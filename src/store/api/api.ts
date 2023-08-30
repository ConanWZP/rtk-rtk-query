import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRecipe} from "../../types/recipe";

const API_URL = 'http://localhost:4200/recipes'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getRecipes: builder.query<IRecipe[], string>({
            query: (text) => `/?_sort=id&_order=desc&q=${text}`,
            providesTags: (result, error, arg, meta) => [
                {
                    type: 'Recipe',
                    id: arg
                }
            ]
        }),
    })
})

export const {useGetRecipesQuery} = api