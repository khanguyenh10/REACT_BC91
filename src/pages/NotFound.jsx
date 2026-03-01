import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <p className="fs-3">
                    <span className="text-danger">Oops!</span> Trang không tồn tại.
                </p>
                <p className="lead">
                    Có vẻ như bạn đã nhập sai đường dẫn.
                </p>

                <Link to="/" className="btn btn-primary btn-lg">
                    ← Về trang chủ
                </Link>
            </div>
        </div>
    );
}

export default NotFound