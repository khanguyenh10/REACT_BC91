import React from 'react'
import { useDispatch } from 'react-redux';

const SanPhamRedux = (props) => {
    console.log(props);
    const { phone } = props;
    const dispatch = useDispatch();
    const handePhoneDetail = (phone) => {
        const action = { type: 'GET_PHONE_DETAIL_ACTION', payload: phone } // action 
        dispatch(action);
    }
    return (
        <div className='card'>
            <img src={phone.hinhAnh} alt='...' width={350} />
            <div className='card-body'>
                <h3 className='card-title'>{phone.tenSP}</h3>
                <p className='card-text'>{phone.giaBan}</p>
                <button className='btn btn-success' onClick={() => handePhoneDetail(phone)}>Xem chi tiết</button>
            </div>
        </div>
    )
}

export default SanPhamRedux