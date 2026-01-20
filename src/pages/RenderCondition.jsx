import React from 'react'

const RenderCondition = () => {
    let isLogin = false;
    let n = 5;

    const renderLogin = () => {
        if (isLogin) {
            return <ul>
                <li>Hello world</li>
                <li>Thông tin tài khoản</li>
                <li>Đơn hàng của bạn</li>
                <li><button>Đăng xuất</button></li>
            </ul>
        }
        return <button className='btn btn-success'>Login</button>
    }
    return (
        <div className='container'>
            <h1>Render condition</h1>
            <nav className='bg-dark text-white text-end p-3'>
                {/* {isLogin ? <div>Hello ! Khải</div> : <button className='btn btn-success'>
                    Login
                </button>} */}
                {renderLogin()}
            </nav>
            <div className='alert alert-success my-2'>
                {n % 2 == 0 ? <div>Số chẵn</div> : <div>Số lẻ</div>}
            </div>
        </div>
    )
}

export default RenderCondition