import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd';
import axios from 'axios';

const handleUserLogin = () => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
        return JSON.parse(localStorage.getItem("ACCESS_TOKEN"));
    }
    return null;
};
const initialState = {
    userLogin: handleUserLogin(),
};
const UserReducer = createSlice({
    name: 'UserReducer',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.userLogin = action.payload
        }
    }
});

export const { setUserLogin } = UserReducer.actions

export default UserReducer.reducer



export const postSignInActionThunk = (userData) => {
    return async (dispatch) => {
        try {
            let res = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signin', userData);
            dispatch(setUserLogin(res.data.content));
            localStorage.setItem('ACCESS_TOKEN', JSON.stringify(res.data.content.accessToken));
            message.success('Đăng nhập thành công')
        } catch (error) {
            console.log(error);
            message.error('Đăng nhập thất bại')
        }

    }
}