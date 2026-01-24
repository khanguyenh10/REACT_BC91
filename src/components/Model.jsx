import React from 'react'

const Model = (props) => {
    const { selectedGlass } = props
    return (
        <section className='model d-flex gap-5 justify-content-between' >
            <div className='glass-model position-relative'>
                <img src='./glassesImage/model.jpg' className='avatar' />
                <div className='info position-absolute bg-warning bottom-0 p-1'>
                    <p className=' text-primary mb-0 fw-bold'>{selectedGlass?.name}</p>
                    <small>{selectedGlass?.desc}</small>
                </div>
                <div className='glass position-absolute w-100 '>
                    <img src={selectedGlass?.url} width={150} className='mx-auto d-block' />
                </div>
            </div>
            <div className='root-model'>
                <img src='./glassesImage/model.jpg' className='avatar' />
            </div>
        </section>
    )
}

export default Model