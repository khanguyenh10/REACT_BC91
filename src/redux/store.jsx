import { configureStore } from "@reduxjs/toolkit";
import dsGhe from '../danhSachGhe.json';
const infoUserDefault = {
    username: '',
    numseats: '',
    selectedSeats: [], // [{soGhe: '', gia: ''}]
    isSelected: false,
    isConfirmed: false
}

const store = configureStore({
    reducer: {
        infoUserReducer: (state = infoUserDefault, action) => {
            state = { ...state }
            switch (action.type) {
                case 'SET_USERNAME':
                    state.username = action.payload
                    break;
                case 'SET_NUMSEATS':
                    state.numseats = action.payload;
                    break;
                case 'SET_SELECTED_A_SEAT':
                    let selectedSeats = [...state.selectedSeats];
                    let indexSeat = selectedSeats.findIndex(seat => seat.soGhe === action.payload.soGhe);
                    if (indexSeat !== -1) {
                        selectedSeats.splice(indexSeat, 1);
                    } else { selectedSeats.push(action.payload) };
                    state.selectedSeats = selectedSeats;
                    break;
                case 'SET_ISSELECTED':
                    state.isSelected = action.payload;
                    break;
                case 'SET_ISCONFIRMED':
                    state.isConfirmed = action.payload;
                    break;
                default:
                    break;
            }
            return state;
        },
        seatReducer: (state = dsGhe, action) => {
            if (action.type == 'SET_SELECTED_SEATS') {
                state = state.map(hang => {
                    // {
                    //     "hang": "A",
                    //     "danhSachGhe": [
                    //         {
                    //             "soGhe": "A1",
                    //             "gia": 75000,
                    //             "daDat": true
                    //         },
                    //     ]
                    // }
                    return {
                        ...hang,
                        danhSachGhe: hang.danhSachGhe.map(ghe => {
                            return {
                                ...ghe,
                                daDat: action.payload
                            }
                        })
                    }
                })
            }
            return state;
        }
    }
})
export default store;