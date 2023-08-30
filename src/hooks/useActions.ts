import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {actions} from "../store/slices/favoritesSlice";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as userActions from "../store/slices/user/userThunk";


const rootActions = {
    ...actions,
    ...userActions
}

export const useActions = () => {

    const dispatch = useDispatch()

    return useMemo(() => {
      return  bindActionCreators(rootActions, dispatch)
    }, [dispatch])

}
