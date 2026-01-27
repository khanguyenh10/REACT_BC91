import React, { useState } from 'react'
import ModalCar from './ModalCar'
import ItemCar from './ItemCar'

const dataCar = [
    { id: 1, name: 'red-car', img: './img/imgRedCar.jpg', price: 1000 },
    { id: 2, name: 'black-car', img: './img/imgBlackCar.jpg', price: 2000 },
    { id: 3, name: 'silver-car', img: './img/imgSilverCar.jpg', price: 3000 },
]
// nên đặt state vào UI cao nhất chứa giao diện và nút xử lý
const ExerciseCarStore = () => {
    const [stateModal, setStateModal] = useState(
        { id: 3, name: 'silver-car', img: './img/imgSilverCar.jpg', price: 3000 }
    )
    return (
        <div className='container'>
            <h3>ExerciseCarStore</h3>
            <ModalCar stateModal={stateModal} />
            <div className='row'>
                {dataCar.map((car, index) => {
                    return <div className='col-md-4' key={car.id}>
                        <ItemCar carItem={car} setStateModal={setStateModal} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ExerciseCarStore