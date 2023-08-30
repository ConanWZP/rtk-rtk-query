import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {reducer} from "./slices/favoritesSlice";
import {userSlice} from "./slices/user/userSlice";
import {api} from "./api/api";
import {createLogger} from "redux-logger";

const logger = createLogger({
   // collapsed: true
})

const reducers = combineReducers({
    favorites: reducer,
    user: userSlice.reducer,
   [api.reducerPath]: api.reducer

})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
