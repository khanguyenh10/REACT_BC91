import React from 'react'

const GlassItem = (props) => {
    const { glass, selectedGlass, onChooseGlass } = props
    return (
        <div className={`glassItem ${selectedGlass?.id === glass?.id ? 'active' : ''}`} onClick={() => onChooseGlass(glass)} >
            <img src={glass?.url} className='glass' width={130} />
        </div>
    )
}

export default GlassItem