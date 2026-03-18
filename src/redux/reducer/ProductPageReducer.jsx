import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { set } from 'lodash';

const initialState = {
    arrProduct: [],
    productDetail: {},
}

const ProductPageReducer = createSlice({
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

export const { setArrayProduct, setProductDetail } = ProductPageReducer.actions

export default ProductPageReducer.reducer




//------------------------------- action thunk---------------------------- 
// call api cho redux

export const getAllProductApiActionThunk = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                `https://apistore.cybersoft.edu.vn/api/Product`,
            );
            const actionPayload = setArrayProduct(res.data.content);
            dispatch(actionPayload)
        } catch (err) {
            console.log(err);
        }
    }
}
export const getProductDetailActionThunk = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`,
            );
            //Sau khi lấy dữ liệu từ api về thì đưa vào state
            dispatch(setProductDetail(res.data.content));

        } catch (err) {
            console.log(err);
        }
    };
};
