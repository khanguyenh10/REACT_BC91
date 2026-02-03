import React from 'react'
import GioHang from './GioHang';
import DanhSachSanPham from './DanhSachSanPham';
import lodash from 'lodash';
const mangSanPham = [
    { maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg" },
    { maSP: 2, tenSP: "Meizu 16Xs", manHinh: "AMOLED, FHD+ 2232 x 1080 pixels", heDieuHanh: "Android 9.0 (Pie); Flyme", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 7600000, hinhAnh: "./img/meizuphone.jpg" },
    { maSP: 3, tenSP: "Iphone XS Max", manHinh: "OLED, 6.5, 1242 x 2688 Pixels", heDieuHanh: "iOS 12", cameraTruoc: "7 MP", cameraSau: "Chính 12 MP & Phụ 12 MP", ram: "4 GB", rom: "64 GB", giaBan: 27000000, hinhAnh: "./img/applephone.jpg" }
];

const BaiTapGioHang = () => {
    const [arrGH, setArrGH] = React.useState([
        //     {
        //     maSP: 1, tenSP: "VinSmart Live", manHinh: "AMOLED, 6.2, Full HD+", heDieuHanh: "Android 9.0 (Pie)", cameraTruoc: "20 MP", cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP", ram: "4 GB", rom: "64 GB", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg", soLuong: 2
        // }
    ]);

    //state component đặt tại đâu thì phương xử lý state sẽ định nghĩa tại đó
    const themGioHang = (spClick) => {
        //xử lý setState thêm giỏ hàng tại đây
        let spGioHangClick = { ...spClick, soLuong: 1 };
        //xử lý setState thêm giỏ hàng tại đây
        // console.log('xử lý thêm giỏ hàng');
        // console.log(spGioHang);
        //Kiểm tra spClick có trong mảng giỏ hàng hay chưa
        let sp = arrGH.find(spGH => spGH.maSP == spGioHangClick.maSP);
        if (sp) {
            sp.soLuong += 1;
        } else {
            arrGH.push(spGioHangClick);
        }
        //cập nhật lại state
        setArrGH([...arrGH]); // chỉ cập nhật khi clone mảng mới
    }
    const xoaGioHang = (spClickId) => {
        // let newArrGH = arrGH.filter(spGH => spGH.maSP != spClickId);
        // let indexSpClick = arrGH.findIndex(spGH => spGH.maSP == spClickId);
        // if (indexSpClick != -1) {
        //     arrGH.splice(indexSpClick, 1);
        //     setArrGH([...arrGH]);
        // }
        // setArrGH(newArrGH);
        let arrGioHangNew = lodash.cloneDeep(arrGH); // chep ra arrObject mới
        let indexDel = arrGH.findIndex(spGH => spGH.maSP == spClickId);
        if (indexDel != -1) {
            arrGioHangNew.splice(indexSpClick, 1);
            setArrGH(arrGioHangNew);
        }
    }
    const capNhatSoLuong = (newValue, maSP) => {
        let arrGioHangNew = lodash.cloneDeep(arrGH); // chep ra arrObject mới
        let spUpdate = arrGioHangNew.find(spGH => spGH.maSP == maSP);
        if (spUpdate && newValue > 0) {
            spUpdate.soLuong = newValue;
            setArrGH(arrGioHangNew);
        }
    }
    return (
        <div className='container'>
            <h3 className='text-center'>BaiTapGioHang</h3>
            <GioHang arrGH={arrGH} xoaGioHang={xoaGioHang} capNhapSoLuong={capNhatSoLuong} />
            <DanhSachSanPham mangSanPham={mangSanPham} themGioHang={themGioHang} />
        </div>
    )
}

export default BaiTapGioHang