
export const imageCarReducer = (state = '/products/steel-car.jpg', action) => {
    switch (action.type) {
        case 'CHANGE_CAR_ACTION':
            state = `/products/${action.payload}-car.jpg`;
            break;
    }
    return state
}