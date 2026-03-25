//rxreducer
export const numberReducer = (stateNumber = 1, action) => {
    console.log('numberReducer', action);
    if (action.type == 'CHANGE_NUMBER_ACTION') { // tên đặt UPPERCASE đại diện hắng số
        stateNumber = stateNumber + action.payload
    }
    return stateNumber //imutable (tính bất biến của redux) shallow compare (so sánh địa chỉ ô nhớ .
}
