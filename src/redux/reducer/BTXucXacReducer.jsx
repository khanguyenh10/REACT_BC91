import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrXucXac: [
        { diem: 1, srcImg: "./img/xucxac/1.png" },
        { diem: 2, srcImg: "./img/xucxac/2.png" },
        { diem: 3, srcImg: "./img/xucxac/3.png" },
        { diem: 4, srcImg: "./img/xucxac/4.png" },
        { diem: 5, srcImg: "./img/xucxac/5.png" },
        { diem: 6, srcImg: "./img/xucxac/6.png" },
    ],
    banChon: 'tai',
    soBanThang: 0,
    soBanThua: 0,
    tongBanCuoc: 0
}
const BTXucXacReducer = createSlice({
    name: 'BTXucXacReducer',
    initialState,
    reducers: {

    }
})
export const { } = BTXucXacReducer.actions;

export default BTXucXacReducer.reducer