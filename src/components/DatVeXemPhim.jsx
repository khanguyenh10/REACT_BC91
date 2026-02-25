import React from 'react'
import FormSelecting from './FormSelecting'
import SeatLayout from './SeatLayout'
import DetailBooking from './DetailBooking'
import { useSelector } from 'react-redux'

const DatVeXemPhim = () => {
    const infoUser = useSelector(rootState => rootState.infoUserReducer);
    const { isSelected } = infoUser;
    return (
        <div className="container">
            <div className="w3ls-reg">
                {/* input fields */}
                <FormSelecting />
                {/* //input fields */}
                {/*-728x90-*/}
                {/* seat availabilty list */}
                <ul className="seat_w3ls">
                    <li className="smallBox greenBox">Selected Seat</li>
                    <li className="smallBox redBox">Reserved Seat</li>
                    <li className="smallBox emptyBox">Empty Seat</li>
                </ul>
                {/* seat availabilty list */}
                {isSelected && <p className='text-center '>
                    <span className='bg-warning my-2 d-inline-block mx-auto p-1'>
                        Please Select your Seats NOW!
                    </span>
                </p>}
                {/* seat layout */}
                <SeatLayout />
                {/* //seat layout */}
                {/* details after booking displayed here */}
                <DetailBooking />
                {/* //details after booking displayed here */}
            </div>
        </div>
    )
}

export default DatVeXemPhim