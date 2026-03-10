

import React, { useState } from 'react'
import ModalHOC from './ModalHOC';
import Register from '../Register';
import Login from '../Login';

/*
  Thay vì truyên tham số function thì có thể truyền jsxElement

*/

const HOCDemo = () => {

    const [Component, setComponent] = useState(<Register />);

    const ModalComponent = ModalHOC(Component);

    return (
        <div className='container'>
            <h3>Demo hoc modal</h3>
            <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark me-2' onClick={() => {
                setComponent(<Register />)
            }}>Open popup đăng ký</button>
            <button data-bs-toggle="modal" data-bs-target="#modalId" className='btn btn-dark me-2' onClick={() => {
                setComponent(<Login />)
            }}>Open popup đăng nhập</button>
            <ModalComponent />
        </div>
    )
}

export default HOCDemo

//higher order component -> higher order function


/*
    HOC : tái sử dụng lại logic của giao diện
    HOF: higher order function
    hàm nhận tham số là 1 hàm và trả về 1 hàm
*/

// function main (callback){
//     return function () {
//         callback();
//         ////

//         return 1;
//     }
// }

// const res = main(()=> {console.log(123)})
// res();