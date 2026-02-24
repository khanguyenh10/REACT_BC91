import { configureStore } from "@reduxjs/toolkit";
import { act } from "react";

const phoneDetailDefault = { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }

/*
    reducer: là hàm trả về state, khi state thay đổi thì component nào follow từ state sẽ tự động chạy lại (render lại). Hàm này sẽ được kích hoạt khi ứng dụng khởi tạo và mỗi lần gửi dữ liệu lên
*/
const store = configureStore({
    reducer: {
        // nơi chứa toàn bộ state của ứng dụng  
        numberReducer: (stateNumber = 1, action) => {
            console.log('numberReducer', action);
            if (action.type == 'CHANGE_NUMBER_ACTION') { // tên đặt UPPERCASE đại diện hắng số
                stateNumber = stateNumber + action.payload
            }
            return stateNumber //imutable (tính bất biến của redux) shallow compare (so sánh địa chỉ ô nhớ .
        },
        abcReducer: (state = 'string', action) => {
            console.log('abcReducer', action);
            return state
        },
        imgCarReducer: (state = '/products/steel-car.jpg', action) => {
            switch (action.type) {
                case 'CHANGE_CAR_ACTION':
                    state = `/products/${action.payload}-car.jpg`;
                    break;
            }
            return state
        },
        indexReducer: (state = 1, action) => {
            switch (action.type) {
                case 'CHANGE_INDEX_ACTION':
                    state = Math.floor(Math.random() * 99) + 1;
                    break;
            }
            return state
        },
        phoneDetailReducer: (state = phoneDetailDefault, action) => {
            switch (action.type) {
                case 'GET_PHONE_DETAIL_ACTION':
                    state = action.payload;
                    break;
            }
            return state
        }
    }
})

export default store