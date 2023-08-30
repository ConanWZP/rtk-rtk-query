import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../../types/user";


const fetchUserById = (userId: number): Promise<IUser> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Jarix'
            })
        }, 1000)
    })
}


export const getUserById = createAsyncThunk<IUser, number>('user/by-id', async (userId, thunkAPI) => {

    try {
        const response = await fetchUserById(userId)
        return response
    } catch (e) {
       return  thunkAPI.rejectWithValue(e)
    }

})