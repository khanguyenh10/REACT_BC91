import React from 'react'

const Loading = ({ text = 'Loading...' }) => {

    return (
        <div className='loading-wrapper'>
            <div className="loading-spinner"></div>
            <p className="loading-text">{text}</p>
        </div>
    )
}

export default Loading