import { createSlice } from "@reduxjs/toolkit";

const saveListSV = (arrSV) => {
    console.log(arrSV);
    const sSV = JSON.stringify(arrSV);
    localStorage.setItem('arrSV', sSV);
}
const getListSV = () => {
    let arrSV = [];
    if (localStorage.getItem('arrSV')) {
        const sSV = localStorage.getItem('arrSV');
        arrSV = JSON.parse(sSV);
    }
    return arrSV;
}

const svSlive = createSlice({
    name: 'svReducer',
    initialState: getListSV(),
    reducers: {
        addSV: (state, action) => {
            // kiểm tra mã SV có tồn tại chưa
            const sv = state.find(sv => sv.maSV === action.payload.maSV)
            if (!sv) {
                state.push(action.payload)
            }
            saveListSV(state);
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
        }
    }
})
export const { addSV, xoaSV, updateSV } = svSlive.actions
export default svSlive.reducer;