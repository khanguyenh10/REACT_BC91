import React from 'react'
import GlassItem from './GlassItem'


const GlassList = (props) => {
    const { data, selectedGlass, onChooseGlass } = props
    return (
        <section className='glassList d-flex gap-4   align-items-center flex-wrap w-75 mx-auto bg-white p-3 mt-5' >
            {
                data.map((glass, index) => <GlassItem key={index} glass={glass} selectedGlass={selectedGlass} onChooseGlass={onChooseGlass} />)
            }
        </section>
    )
}

export default GlassList