import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thayDoiSoLuongAction, xoaGioHangAction } from '../../../redux/reducer/BTGioHangReducerSlice';

const GioHangRedux = () => {

    const { gioHang } = useSelector(state => state.BTGioHangReducer);
    const dispatch = useDispatch()
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
                    {gioHang.map((spGH, index) => {
                        return <tr key={index}>
                            <td>{spGH.maSP}</td>
                            <td><img width={50} src={spGH.hinhAnh} alt='...' /></td>
                            <th>{spGH.tenSP}</th>
                            <td>
                                <input onInput={(e) => {
                                    // capNhatSoLuong(e.target.value, spGH.maSP)
                                    const action = thayDoiSoLuongAction({
                                        maSP: spGH.maSP,
                                        soLuong: e.target.value
                                    });
                                    dispatch(action);
                                }} type='number' value={spGH.soLuong}></input>

                            </td>
                            <td>{spGH.giaBan.toLocaleString()}</td>
                            <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                            <td>
                                <button className='btn btn-danger' onClick={(e) => {
                                    //Gửi action lên redux
                                    //B1: tạo action
                                    const action = xoaGioHangAction(spGH.maSP);
                                    //B2: dispatch action
                                    dispatch(action);
                                }}>Xoá</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default GioHangRedux