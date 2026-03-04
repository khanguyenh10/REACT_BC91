import React from 'react'

const FormItem = (props) => {
    const { label, error, type, datatype, ...rest } = props;
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div className="form-item ">
            <label >{label}</label> <br />
            <div className=' position-relative'>
                <input className=''{...rest} type={showPassword ? 'text' : 'password'} />
                {datatype === 'password' && <span className=' position-absolute top-50 translate-middle' style={{ right: 2 }}>
                    <div>
                        {showPassword && <i className="fa fa-eye" onClick={() => setShowPassword(false)} />}
                        {!showPassword && <i className="fa fa-eye-slash" onClick={() => setShowPassword(true)} />}
                    </div>

                </span>}
            </div>
            <p className=' text-danger'>{error}</p>
        </div>
    )
}

export default FormItem