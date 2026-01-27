import React from 'react'
import PhoneItem from './PhoneItem';

const dataPhone = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
]

const LiftingStateUpDemo = () => {
    const [phoneDetail, setPhoneDetail] = React.useState(
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" }
    );


    return (
        <div className='container'>
            <h3>Bài tập xem chi tiết sản phẩm</h3>
            <div className='row'>
                {dataPhone.map((phone, index) => {
                    return (
                        <div className='col-md-4' key={phone.maSP}>
                            {/* <div className='card'>
                                <img src={phone.hinhAnh} alt='...' width={350} />
                                <div className='card-body'>
                                    <h3 className='card-title'>{phone.tenSP}</h3>
                                    <p className='card-text'>{phone.giaBan}</p>
                                    <button className='btn btn-success' onClick={() => setPhoneDetail(phone)}>Xem chi tiết</button>
                                </div>
                            </div> */}
                            <PhoneItem phone={phone} handlePhoneDetail={setPhoneDetail} />
                        </div>
                    )

                })}

            </div>
            <hr />
            <div className='mt-2'>
                <h3>Chi tiết sản phẩm</h3>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>Tên sản phẩm</h3>
                        <img src={phoneDetail.hinhAnh} className='img-fluid' alt='...' height={300} />
                    </div>
                    <div className='col-md-8'>
                        <h3>Thông số kỹ thuật</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{phoneDetail.manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{phoneDetail.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{phoneDetail.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{phoneDetail.cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>Ram</td>
                                    <td>{phoneDetail.ram}</td>
                                </tr>
                                <tr>
                                    <td>Rom</td>
                                    <td>{phoneDetail.rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LiftingStateUpDemo