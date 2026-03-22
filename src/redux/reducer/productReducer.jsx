import { createSlice } from '@reduxjs/toolkit'
import { toastError } from '../../util/toast';
import { getProductApi } from '../../api/productApi';

const initialState = {
    arrProduct: [],
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setArrayProduct: (state, action) => {
            state.arrProduct = action.payload
        }
    }
});

export const { setArrayProduct } = productReducer.actions;

export default productReducer.reducer;


// ------------------------------- action thunk----------------------------

export const getAllProductActionThunk = (keyword = '') => {
    return async (dispatch) => {
        try {
            const res = await getProductApi(keyword);
            const actionPayload = setArrayProduct(res.data.content.slice(0, 18));
            dispatch(actionPayload)
        }
        catch (err) {
            toastError(err);
        }
    }
}