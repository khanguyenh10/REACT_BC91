import React from 'react'

const DataBinding = () => {
    //biến  
    let title = "cybersoft";
    let hoTen = 'Khai';
    //hàm
    /*
     Đối với hàm khi render dữ liệu có thể trả về dạng number, string , bool, jsx
    */
    const renderName = (name) => {
        return (
            <div>
                <h1>{name}</h1>
            </div>
        )
    }
    //

    return (
        <div className='container'>
            <h1>DataBinding</h1>
            <h3>Tiêu đề: {title}</h3>
            {renderName('khả')}
            <div className='form-group w-25'>
                <label htmlFor="hoTen">Họ tên</label>
                <input className='form-control' value={hoTen} id='hoTen' />
            </div>
        </div>
    )
}

export default DataBinding