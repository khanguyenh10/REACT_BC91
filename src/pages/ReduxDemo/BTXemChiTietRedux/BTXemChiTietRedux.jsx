import React from 'react'
import SanPhamChiTiet from './SanPhamChiTiet'
import SanPhamRedux from './SanPhamRedux'

const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

const BTXemChiTietRedux = () => {
    return (
        <div className="container">
            <h1 className='text-center'>Bài tập xem chi tiết</h1>
            <div className="row">
                {dataPhone.map((phone, index) => {
                    return (
                        <div className='col-md-4' key={phone.maSP}>
                            <SanPhamRedux phone={phone} />
                        </div>
                    )

                })}
            </div>
            <div className="mt-3">
                <SanPhamChiTiet />
            </div>
        </div>
    )
}

export default BTXemChiTietRedux