import React from 'react'
import GioHangRedux from './GioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

const BaiTapGioHangRedux = () => {
    return (
        <div className='container'>
            <h3 className='text-center'>Bài tập giỏ hàng</h3>
            <GioHangRedux />

            <DanhSachSanPhamRedux />

        </div>
    )
}

export default BaiTapGioHangRedux