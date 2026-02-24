import React from 'react'
import { useSelector } from 'react-redux';

const SanPhamChiTiet = () => {
    const { phoneDetailReducer: phoneDetail } = useSelector(rootState => rootState);
    return (
        <div>
            <h3>Chi tiết sản phẩm</h3>
            <div className='row'>
                <div className='col-md-4'>
                    <h3>Tên sản phẩm</h3>
                    <img src={phoneDetail?.hinhAnh} className='img-fluid' alt='...' height={300} />
                </div>
                <div className='col-md-8'>
                    <h3>Thông số kỹ thuật</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td>Màn hình</td>
                                <td>{phoneDetail?.manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{phoneDetail?.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{phoneDetail?.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{phoneDetail?.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>Ram</td>
                                <td>{phoneDetail?.ram}</td>
                            </tr>
                            <tr>
                                <td>Rom</td>
                                <td>{phoneDetail?.rom}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default SanPhamChiTiet