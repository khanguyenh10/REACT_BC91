const initialState = Math.floor(Math.random() * 99) + 1;

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_INDEX_ACTION':
            //tạo số ngẫu nhiên
            let numberRandom = Math.floor(Math.random() * 99) + 1;
            state = numberRandom;
            return state;
        default:
            return state
    }
}

