import { configureStore } from "@reduxjs/toolkit";
import { act } from "react";
import { numberReducer } from "./reducer/numberReducer";
import { imageCarReducer } from "./reducer/imageCarReducer";
import numberPeopleReducer from "./reducer/numberPeopleReducer";
import BTGioHangReducer from "./reducer/BTGioHangReducerSlice";
// import BTGioHangReducer from "./reducer/BTGioHangReducer";
import BTXucXacReducer from "./reducer/BTXucXacReducer";

const phoneDetailDefault = { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }

/*
    reducer: là hàm trả về state, khi state thay đổi thì component nào follow từ state sẽ tự động chạy lại (render lại). Hàm này sẽ được kích hoạt khi ứng dụng khởi tạo và mỗi lần gửi dữ liệu lên
*/
const store = configureStore({
    reducer: {
        // nơi chứa toàn bộ state của ứng dụng  
        numberReducer: numberReducer,
        abcReducer: (state = 'string', action) => {
            console.log('abcReducer', action);
            return state
        },
        imgCarReducer: imageCarReducer,
        numberPeopleReducer: numberPeopleReducer,
        phoneDetailReducer: (state = phoneDetailDefault, action) => {
            switch (action.type) {
                case 'GET_PHONE_DETAIL_ACTION':
                    state = action.payload;
                    break;
            }
            return state
        },
        // BTGioHangReducer
        BTGioHangReducer,
        BTXucXacReducer,
    }
})

export default store