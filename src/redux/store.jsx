import { configureStore } from "@reduxjs/toolkit";

const infoUserDefault = {
    username: '',
    numseats: '',
    selectedSeats: [],
    isSelected: false
}

const store = configureStore({
    reducer: {
        infoUserReducer: (state = infoUserDefault, action) => {
            return state;
        }
    }
})
export default store;