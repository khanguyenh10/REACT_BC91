import { createSlice } from '@reduxjs/toolkit'
import axios, { Axios } from 'axios';
import { ACCESSTOKEN, DOMAIN, getLocalStorage, getLocalStorageString, httpClient, saveCookie, saveLocalStorageString, USERLOGIN } from '../../util/Config';


// kiểm tra localstorage có userLogin chưa, nếu có thì lấy ra còn ko thì để rỗng
let userLoginDefault = getLocalStorageString(USERLOGIN);
let accessTokenDefault = getLocalStorageString(ACCESSTOKEN);

const initialState = {
    userLogin: userLoginDefault,
    accessToken: accessTokenDefault,
    userProfile: null
}

const UserLoginReducer = createSlice({
    name: 'userLoginReducer',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.userLogin = action.payload.userLogin;
            state.accessToken = action.payload.accessToken;
        },
        getProfileAction: (state, action) => {
            state.userProfile = action.payload;
        }
    }
});

export const { loginAction, getProfileAction } = UserLoginReducer.actions

export default UserLoginReducer.reducer;


//Action gọi api

export const loginActionApiAsync = (email, password) => {
    return async (dispatch) => {
        try {
            //call api login
            const res = await httpClient.post(`/Users/signin`, { email, password });
            //Nhận kết quả về lưu vào localstorage đồng thời dispatch lên redux
            const payload = {
                userLogin: res.data?.content?.email,
                accessToken: res.data?.content?.accessToken
            };
            //dispatch lên redux
            const action = loginAction(payload);
            dispatch(action);
            //Lưu vào localstorage
            saveLocalStorageString(USERLOGIN, payload.userLogin);
            saveLocalStorageString(ACCESSTOKEN, payload.accessToken);
            //Lưu vào cookie
            saveCookie(USERLOGIN, payload.userLogin, 7);
            saveCookie(ACCESSTOKEN, payload.accessToken, 7);
        } catch (error) {
            alert(error?.response?.data?.message);
        }

    }
}
export const getProfileActionApiAsync = () => {

    return async dispatch => {
        try {
            //call api login
            const res = await httpClient.post(`/Users/getProfile`);
            //Nhận kết quả về lưu vào localstorage đồng thời dispatch lên redux
            const payload = res.data?.content;
            //dispatch lên redux
            const action = getProfileAction(payload);
            dispatch(action);
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message);
        }
    }
}