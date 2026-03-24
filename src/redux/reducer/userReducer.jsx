import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageString, removeLocalStorage, setLocalStorageString } from "../../util/storageUtil";
import { getProductFavoritesApi, signInApi } from "@/api/userApi";
import { toastError } from "@/util/toast";
import { ACCESSTOKEN, USERLOGIN } from "@/util/config";


const getUserInfo = () => {
    let userInfo = {
        accessToken: getLocalStorageString(ACCESSTOKEN),
        userLogin: getLocalStorageString(USERLOGIN),
        productsFavorite: [],
    };
    return userInfo;
}

const userSlice = createSlice({
    name: 'userReducer',
    initialState: getUserInfo(),
    reducers: {
        signIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.userLogin = action.payload.email;
            setLocalStorageString(ACCESSTOKEN, action.payload.accessToken);
            setLocalStorageString(USERLOGIN, action.payload.email);
        },
        signOut: (state) => {
            state.accessToken = '';
            state.userLogin = '';
            removeLocalStorage(ACCESSTOKEN);
            removeLocalStorage(USERLOGIN);
        },
        setProductsFavorite: (state, action) => {
            state.productsFavorite = action.payload.productsFavorite;
        },
        toggleProductFavorite: (state, action) => {
            const product = state.productsFavorite.find(product => product.id === action.payload.id);
            if (product) {
                state.productsFavorite = state.productsFavorite.filter(product => product.id !== action.payload.id);
            } else {
                state.productsFavorite.push(action.payload);
            }
        },
    }
})
export const { signIn, signOut, setProductsFavorite, toggleProductFavorite } = userSlice.actions
export default userSlice.reducer;




// ------------------------------- action thunk----------------------------

export const getProductFavoritesActionThunk = () => {
    return async (dispatch) => {
        try {
            if (!getLocalStorageString(ACCESSTOKEN)) {
                return;
            }
            const res = await getProductFavoritesApi();
            const actionPayload = setProductsFavorite(res.data.content);
            dispatch(actionPayload)
        }
        catch (err) {
            toastError(err);
        }
    }
}