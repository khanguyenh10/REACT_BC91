import React from 'react'

const ReactFormDemo = () => {
    const [userLogin, setUserLogin] = React.useState({
        email: '',
        password: '',
        fullName: ''
    });
    const [errUserLogin, setErrUserLogin] = React.useState({
        email: '',
        password: '',
        fullName: ''

    });
    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        let dataType = e.target.getAttribute('datatype');
        let newValue = {
            ...userLogin,
            [name]: value
        }
        //xữ lý cho trường hợp lỗi;
        let newError = { ...errUserLogin };
        if (newValue[name].trim() == '') {
            newError[name] = `${name} cannot be blank`;
        } else {
            newError[name] = '';
            if (dataType) {
                switch (dataType) {
                    case 'email': {
                        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
                        if (!regexEmail.test(value)) {
                            newError[name] = 'Email is invalid - Ex: email@gmail.com';
                        }
                    }; break;
                    case 'password': {
                        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[{\]};:'",.<>/?\\|`~]).{8,}$/;
                        if (!passwordRegex.test(value)) {
                            newError[name] = 'Password is invalid - Ex: Cybersoft@123';

                        }
                    }; break;
                    default: {

                    }
                }
            }

        }

        //Cuối cùng setState
        setUserLogin(newValue)
        setErrUserLogin(newError);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //Một form được xem là hợp lệ khi các trường đã được nhập và err tất cả phải = ''
        let isValid = true;
        for (let key in userLogin) {
            if (userLogin[key].trim() == '') {
                isValid = false;
                return;
            }
        }
        for (let key in errUserLogin) {
            if (errUserLogin[key] !== '') {
                isValid = false;
                return;
            }
        }
        //sau khi check oke hết mới cho submit
        console.log(userLogin, "submit");

    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='w-50 mx-auto card'>
                <div className='card-header bg-dark text-white text-center'>Login</div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input datatype='email' className='form-control' id="email" name="email" value={userLogin.email} onInput={handleChangeInput} />
                        <p className='text text-danger'>{errUserLogin.email}</p>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="fullName">FullName</label>
                        <input datatype='name' type='text' className='form-control' id="fullName" name="fullName" value={userLogin.fullName} onInput={handleChangeInput} />
                        <p className='text text-danger'>{errUserLogin.fullName}</p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input datatype='password' className='form-control' id="password" name="password" type='password' value={userLogin.password} onChange={handleChangeInput}
                        />
                        <p className='text text-danger'>{errUserLogin.password}</p>
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-dark' type="submit">Login</button>
                </div>
            </div>
        </form>
    )
}

export default ReactFormDemo