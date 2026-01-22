import React from 'react'

const ChangeFontSize = () => {
    const [fSize, setFSize] = React.useState(16);
    return (
        <div className='container'>
            <h3>Change fontsize</h3>
            <p style={{ fontSize: fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nisi.</p>
            <button className='btn btn-outline-success me-2' onClick={(e) => setFSize(fSize + 5)}>Zoom in</button>
            <button className='btn btn-success' onClick={(e) => setFSize(fSize - 5)}>Zoom out</button>
        </div>
    )
}

export default ChangeFontSize