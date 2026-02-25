import React from 'react'
import FormSelecting from './FormSelecting'
import SeatLayout from './SeatLayout'
import DetailBooking from './DetailBooking'

const DatVeXemPhim = () => {
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