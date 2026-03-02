import React from 'react'

const HeadingTitle = (props) => {
    const { title } = props;
    return (
        <div className='heading-title p-3 bg-linear-gradient '>
            <h2 className='fs-4 text-white fw-light'>{title}</h2>
        </div>
    )
}

export default HeadingTitle