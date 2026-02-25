import React from 'react'
import { useSelector } from 'react-redux';

const DetailBooking = () => {
    const infoUser = useSelector(rootState => rootState.infoUserReducer);
    const { username, numseats, selectedSeats, isConfirmed } = infoUser;
    return (
        <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
            <table className="Displaytable w3ls-table" width="100%">
                <tbody><tr>
                    <th>Name</th>
                    <th>Number of Seats</th>
                    <th>Seats</th>
                </tr>
                    <tr>
                        <td>
                            <textarea id="nameDisplay" disabled defaultValue={isConfirmed ? username : ''} />
                        </td>
                        <td>
                            <textarea id="NumberDisplay" disabled defaultValue={isConfirmed ? numseats : ''} />
                        </td>
                        <td>
                            <textarea id="seatsDisplay" disabled defaultValue={isConfirmed ? selectedSeats.map(seat => seat.soGhe).join(', ') : ''} />
                        </td>
                    </tr>
                </tbody></table>
        </div>
    )
}

export default DetailBooking