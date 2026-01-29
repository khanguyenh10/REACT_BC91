import React from 'react'
import SanPhamGH from './SanPhamGH'

const DanhSachSanPham = (props) => {
    const { mangSanPham, themGioHang } = props;
    return (
        <div>
            <h3>DanhSachSanPham</h3>
            <div className="row">
                {
                    mangSanPham.map((sanPham, index) => {
                        return <div className='col-md-4' key={sanPham.maSP}>
                            <SanPhamGH sanPham={sanPham} themGioHang={themGioHang} />
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default DanhSachSanPham