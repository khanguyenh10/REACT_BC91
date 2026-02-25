import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FormSelecting = () => {
    const state = useSelector(rootState => rootState.infoUserReducer);
    console.log(state)
    const dispatch = useDispatch();

    const handeInput = (e) => {
        const { value, id } = e.target;
        let action = {};
        if (id === 'Username') {
            action({ type: 'SET_USERNAME', payload: value });
        }
        if (id === 'Numseats') {
            action({ type: 'SET_NUMSEATS', payload: +value });
        }
        dispatch(action);
    }
    const takeData = (e) => {
        e.preventDefault();
        console.log(formData)
        if (formData.username === '' || formData.numseats === '') {
            alert('Please Enter your Name and Number of Seats');
        } else if (formData.numseats < 1) {
            alert('Please select at least one seat');
        }
    }
    return (
        <form className="inputForm">
            <h2>fill the required details below and select your seats</h2>
            <div className="mr_agilemain">
                <div className="agileits-left">
                    <label> Name
                        <span>*</span>
                    </label><br />
                    <input type="text" id="Username" onChange={handeInput} />
                </div>
                <div className="agileits-right">
                    <label> Number of Seats
                        <span>*</span>
                    </label>
                    <input type="number" id="Numseats" min={1} onChange={handeInput} />
                </div>
            </div>
            <button onClick={takeData}>Start Selecting</button>
        </form>
    )
}

export default FormSelecting