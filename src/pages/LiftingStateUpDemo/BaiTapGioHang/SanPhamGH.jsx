import React from 'react'

const SanPhamGH = (props) => {
    const { sanPham, themGioHang } = props
    return (
        <div>
            <div className="card">
                <img src={sanPham.hinhAnh} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sanPham.tenSP}</h5>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()} VND</p>
                    <button className="btn btn-dark" onClick={() => themGioHang(sanPham)}>
                        Thêm giỏ hàng <i className="fa fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SanPhamGH