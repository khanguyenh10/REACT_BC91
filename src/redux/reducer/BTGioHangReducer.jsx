/*
    B1: xây dựng giao diện chia component
    B2: Xác định state (object, array, string, bool, number ,...) -> lưu tại store redux với tên gọi reducer
    B3: Lấy state về component chứa giao diện tương ứng bằng useSelector
    B4: Xây dựng sự kiện cho nút xử lý đưa dữ liệu lên redux thông qua object action(type,payload)
    

*/


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

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'THEM_GIO_HANG_ACTION': {
            //Xử lý action thêm giỏ hàng
            /*
                ví dụ click vào sp 3 => action.payload:        { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraTruoc: "7 MP", cameraSau: "Chính 12 MP & Phụ 12 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" }
            */
            let spGioHangClick = { ...payload, soLuong: 1 };
            let stateGioHang = [...state.gioHang];
            //Kiểm tra spGioHangClick có trong state.gioHang hay chưa
            let spGH = stateGioHang.find(sp => sp.maSP === spGioHangClick.maSP);
            if (spGH) {
                spGH.soLuong += 1;
            } else {
                stateGioHang.push(spGioHangClick);
            }

            return { ...state, gioHang: stateGioHang };

        }; break;
        default:
            return state
    }
}
