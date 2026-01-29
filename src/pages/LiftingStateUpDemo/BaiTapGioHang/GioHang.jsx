import React from 'react'

const GioHang = (props) => {
    const { arrGH, xoaGioHang, capNhapSoLuong } = props
    return (
        <div className='gio-hang'>
            <h3>Giỏ hàng</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá bán</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrGH.map((spGH, index) => {
                            return (
                                <tr key={index}>
                                    <td>{spGH.maSP}</td>
                                    <td><img src={spGH.hinhAnh} width={50} /></td>
                                    <td>{spGH.tenSP}</td>
                                    <td>
                                        <input type='number' value={spGH.soLuong} onInput={e => capNhapSoLuong(e.target.value, spGH.maSP)} />
                                    </td>
                                    <td>{spGH.giaBan.toLocaleString()}</td>
                                    <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                                    <td><button className='btn btn-danger' onClick={() => xoaGioHang(spGH.maSP)}>X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default GioHang