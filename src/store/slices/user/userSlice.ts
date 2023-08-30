import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUserById} from "./userThunk";
import {IUser} from "../../../types/user";



interface IUserSlice {
    isLoading: boolean,
    error: null | string,
    user: IUser
}

const initialState: IUserSlice = {
    isLoading: false,
    error: null,
    user: {} as IUser,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getUserById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(getUserById.rejected, (state, action: any) => {
            state.isLoading = false
            state.error = action.payload!.error
            state.user = {} as IUser
        })
    }
})