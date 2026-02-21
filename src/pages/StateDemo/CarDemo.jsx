import React from 'react'
/*
    B1: Xây dựng giao diện
    B2: Xác định dữ liệu thay đổi (string, bool, number, ...)
    B3: Data binding state lên giao diện
    B4: Xây dựng sự kiện xử lý setState

*/


const CarDemo = () => {
    const [imgSrc, setImgSrc] = React.useState('/products/steel-car.jpg');

    const changeCarColor = (color) => setImgSrc(`/products/${color}-car.jpg`); //change  Color
    return (
        <div>
            <h3>Change color car</h3>
            <div className='d-flex gap-2 align-items-center'>
                <img src={imgSrc} width={500} />
                <div className='d-flex gap-2'>
                    <button className='btn btn-danger' onClick={() => changeCarColor('red')}>Red color</button>
                    <button className='btn btn-secondary' onClick={() => changeCarColor('silver')}>Silver color</button>
                    <button className='btn btn-dark' onClick={() => changeCarColor('black')}>Black color</button>
                </div>
            </div>

        </div>
    )
}

export default CarDemo