import React from 'react'

const Button = ({
    loading = false,
    children,
    type = 'button',
    ...props
}) => {
    return (
        <button type='button' {...props}>
            {loading && <span className='spinner'></span>}
            <span>{children}</span>
        </button>
    )
}

export default Button