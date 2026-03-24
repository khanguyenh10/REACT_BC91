import { createSlice } from '@reduxjs/toolkit'
import { toastError } from '../../util/toast';
import { getProductApi, getProductByIdApi } from '../../api/productApi';

const initialState = {
    arrProduct: [],
    productDetail: {}
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        setArrayProduct: (state, action) => {
            state.arrProduct = action.payload
        },
        setProductDetail: (state, action) => {
            state.productDetail = action.payload
        }
    }
});

export const { setArrayProduct, setProductDetail } = productReducer.actions;

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
export const getProductDetailActionThunk = (productId) => {
    return async (dispatch) => {
        try {
            const res = await getProductByIdApi(productId);
            dispatch(setProductDetail(res.data.content));
        } catch (err) {
            toastError(err);
        }
    }
}