import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const SeatLayout = () => {
    const infoUser = useSelector(rootState => rootState.infoUserReducer);
    const dsGhe = useSelector(rootState => rootState.seatReducer);
    const { isSelected, selectedSeats, isConfirmed, numseats } = infoUser;
    const dispatch = useDispatch();
    const handleInput = (e, ghe) => {
        console.log(selectedSeats.length, numseats)
        if (selectedSeats.length < numseats) {
            let action = {
                type: 'SET_SELECTED_A_SEAT',
                payload: { ...ghe, daDat: !ghe.daDat }
            };
            dispatch(action);
        } else {
            e.target.checked = false;
        }
    }
    const updateTextArea = () => {
        if (selectedSeats.length !== numseats) {
            alert(`Please select ${numseats} seats`)
            return;
        } else {
            let action = {
                type: 'SET_SELECTED_SEATS',
                payload: selectedSeats
            };
            dispatch(action);
            dispatch({ type: 'SET_ISCONFIRMED', payload: true });
        }

    }
    return (
        <div className="seatStructure txt-center" style={{ overflowX: 'auto', pointerEvents: (!isSelected || isConfirmed) && 'none' }}>
            <p id="notification" /><table id="seatsBlock">
                <tbody><tr>
                    <td ></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                    {dsGhe?.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.hang}</td>
                                {item.danhSachGhe.map((ghe, index) => {
                                    return (
                                        <td key={index}>
                                            <input type="checkbox" className="seats" defaultValue={ghe.soGhe} disabled={ghe.daDat} onInput={(e) => handleInput(e, ghe)} />
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}

                </tbody></table>
            <div className="screen">
                <h2 className="wthree">Screen this way</h2>
            </div>
            <button onClick={updateTextArea} disabled={!isSelected || isConfirmed}>Confirm Selection</button>
        </div>
    )
}

export default SeatLayout