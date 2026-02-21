import React from 'react'

const HandleEvent = () => {

    //callback function
    const handleClick = (e) => {
        console.log('hello ahihi')
    }
    const handleClickBinding = (message, e) => {
        console.log(message, e)
    }
    //Khai báo các hàm xử lý
    const getProductApi = () => {
        console.log('getProductApi')
    }
    return (
        <div className="container">
            <h1>Handle Event</h1>
            <button className='btn btn-success' onClick={handleClick}>HandleEvent</button>
            {/* truyền tham số bằng .bind */}
            <button className='btn btn-warning ms-2' onClick={handleClickBinding.bind(this, 'ahihi')}>HandleEvent</button>
            <br />
            <button className='btn btn-danger' onClick={(event) => {
                console.log('Hello anonymous function');
                //Gọi các hàm khác
                getProductApi();
                //event.target: dom ngược lại thẻ
                //event.target.className = 'btn btn-success';
                event.target.classList.toggle('btn-dark');
            }}>click</button>
        </div>
    )
}

export default HandleEvent




//function closure

const handleEvent = () => {


    return function () {
        console.log(123)
    }
}

handleEvent()();