import { createSlice } from "@reduxjs/toolkit";
import { getData, saveData } from "../../util/saveUtil";


const getUserInfo = () => {
    let userInfo = {
        accessToken: '',
        email: '',
        isLogined: false,
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
        updateSV: (state, action) => {
            const sv = state.find(sv => sv.maSV === action.payload.maSV)
            if (sv) {
                sv.hoTenSV = action.payload.hoTenSV;
                sv.email = action.payload.email;
                sv.soDT = action.payload.soDT;
            }
            saveListSV(state);
        },
        xoaSV: (state, action) => {
            // kiểm tra mã SV có tồn tại chưa
            console.log("maSV: " + action.payload)
            const index = state.findIndex(sv => sv.maSV === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
            saveListSV(state);
        },
        timSV: (state, action) => {
            if (action.payload) {
                return state.filter(sv => stringToSlug(sv.hoTenSV).search(stringToSlug(action.payload)) !== -1);
            }
            return getListSV();

        }
    }
})
export const { signIn, signOut } = userSlice.actions
export default userSlice.reducer;