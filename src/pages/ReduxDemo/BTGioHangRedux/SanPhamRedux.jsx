import React from 'react'
import { useDispatch } from 'react-redux';
import { themGioHangAction } from '../../../redux/reducer/BTGioHangReducerSlice';

const SanPhamRedux = (props) => {
    //dispatch dùng để gửi dữ liệu lên redux (action= {type,payload})
    const { dataSP } = props;
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <img src={dataSP.hinhAnh} alt='...' />
            <div className='card-body'>
                <h3 className='card-title'>{dataSP.tenSP}</h3>
                <p className='card-text'>{dataSP.giaBan.toLocaleString()}</p>
                <button className='btn btn-dark' onClick={(e) => {
                    //B1: tạo object action
                    //Cách 1 tạo action creator thủ công
                    // const action = {
                    //     type:'BTGioHangReducer/themGioHangAction',
                    //     payload: dataSP
                    // }
                    //Cách 2 gọi hàm action creator chỉ cần truyền vào payload
                    const action = themGioHangAction(dataSP);
                    console.log('action', action);
                    //B2: dispatch action lên store
                    dispatch(action);

                }}>Thêm giỏ hàng <i className="fa fa-cart-plus"></i> </button>
            </div>
        </div>
    )
}

export default SanPhamRedux