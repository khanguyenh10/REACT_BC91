/*
    B1: xây dựng giao diện chia component
    B2: Xác định state (object, array, string, bool, number ,...) -> lưu tại store redux với tên gọi reducer
    B3: Lấy state về component chứa giao diện tương ứng bằng useSelector
    B4: Xây dựng sự kiện cho nút xử lý đưa dữ liệu lên redux thông qua object action(type,payload)
    

*/


//rxslice

import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    mangSanPham: [
        { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" },
        { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg" },
        { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraTruoc: "7 MP", cameraSau: "Chính 12 MP & Phụ 12 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" }
    ],
    gioHang: [
        { maSP: 3, tenSP: "Iphone XS Max", giaBan: 27000000, hinhAnh: "./img/applephone.jpg", soLuong: 5 }
    ]
}

const BTGioHangReducerSlice = createSlice({
    name: 'BTGioHangReducerSlice', //Giúp tạo ra tên action (mình không cần phải hardcode action)
    initialState,
    reducers: {
        themGioHangAction: (state, action) => {
            //Xử lý việc clone state tránh immutable
            const spGioHangClick = { ...action.payload, soLuong: 1 }
            const spGH = state.gioHang.find(sp => sp.maSP == spGioHangClick.maSP);
            if (spGH) {
                spGH.soLuong += 1;
            } else {
                state.gioHang.push(spGioHangClick);
            }

        },
        xoaGioHangAction: (state, action) => {
            const index = state.gioHang.findIndex(sp => sp.maSP == action.payload.maSP);
            state.gioHang.splice(index, 1);
        },
        thayDoiSoLuongAction: (state, action) => {
            const spGH = state.gioHang.find(sp => sp.maSP == action.payload.maSP);
            if (spGH) {
                spGH.soLuong = action.payload.soLuong;
            }
        }
    }
});

export const { themGioHangAction, xoaGioHangAction, thayDoiSoLuongAction } = BTGioHangReducerSlice.actions

export default BTGioHangReducerSlice.reducer //nó là function (state, action) => state