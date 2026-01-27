import React from 'react'

const PhoneItem = (props) => {
    console.log(props);
    const { phone, handlePhoneDetail } = props;
    return (
        <div className='card'>
            <img src={phone.hinhAnh} alt='...' width={350} />
            <div className='card-body'>
                <h3 className='card-title'>{phone.tenSP}</h3>
                <p className='card-text'>{phone.giaBan}</p>
                <button className='btn btn-success' onClick={() => handlePhoneDetail(phone)}>Xem chi tiết</button>
            </div>
        </div>
    )
}

export default PhoneItem