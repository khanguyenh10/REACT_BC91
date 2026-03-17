import { createSlice } from "@reduxjs/toolkit";
import { getData, saveData } from "../../util/saveUtil";


const getUserInfo = () => {
    let userInfo = {
        accessToken: '',
        email: '',
        isLogined: false,
        productsFavorite: [],
    };
    if (getData('userInfo')) {
        let userInfoData = getData('userInfo');
        userInfo.accessToken = userInfoData.accessToken;
        userInfo.email = userInfoData.email;
        userInfo.isLogined = Boolean(userInfoData.isLogined);
    }
    return userInfo;
}

const userSlice = createSlice({
    name: 'userReducer',
    initialState: getUserInfo(),
    reducers: {
        signIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.email = action.payload.email;
            state.isLogined = true;
            saveData(state, 'userInfo');
        },
        signOut: (state, action) => {
            state.accessToken = '';
            state.email = '';
            state.isLogined = false;
            localStorage.removeItem('userInfo');
        },
        renderProductsFavorite: (state, action) => {
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
export const { signIn, signOut, renderProductsFavorite, toggleProductFavorite } = userSlice.actions
export default userSlice.reducer;