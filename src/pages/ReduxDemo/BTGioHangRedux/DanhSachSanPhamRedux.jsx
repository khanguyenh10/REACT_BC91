import React from 'react'
import SanPhamRedux from './SanPhamRedux';
import { useSelector } from 'react-redux';

const DanhSachSanPhamRedux = () => {
    const { mangSanPham } = useSelector(rooteState => rooteState.BTGioHangReducer);


    return (
        <div>
            <h3>Danh sách sản phẩm</h3>
            <div className='row'>
                {mangSanPham.map((sanPham, index) => {
                    return <div className='col-md-4' key={index}>
                        <SanPhamRedux dataSP={sanPham} />
                    </div>
                })}

            </div>
        </div>
    )
}

export default DanhSachSanPhamRedux