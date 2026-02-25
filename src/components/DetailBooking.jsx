import React from 'react'

const DetailBooking = () => {
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
                            <textarea id="nameDisplay" disabled defaultValue={""} />
                        </td>
                        <td>
                            <textarea id="NumberDisplay" disabled defaultValue={""} />
                        </td>
                        <td>
                            <textarea id="seatsDisplay" disabled defaultValue={""} />
                        </td>
                    </tr>
                </tbody></table>
        </div>
    )
}

export default DetailBooking