import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../util/storageUtil";

const getCartInfo = () => {
    let cart = [];
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    return cart;
}
const initialState = {
    cart: getCartInfo(),
};

const cartSlice = createSlice({
    name: 'cartReducer',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            // kiểm tra mã product có tồn tại chưa
            const existingProduct = state.cart.find(p => p.id === action.payload.id);
            if (!existingProduct) {
                state.cart.push(action.payload);
            } else {
                existingProduct.quantity += action.payload.quantity;
            }
            setLocalStorage(state.cart, 'cart');
        },
        updateToCart: (state, action) => {
            const existingProduct = state.cart.find(p => p.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity = action.payload.quantity;
            }
            setLocalStorage(state.cart, 'cart');
        },
        removeToCart: (state, action) => {
            // kiểm tra mã product có tồn tại chưa
            const index = state.cart.findIndex(p => p.id === action.payload)
            if (index !== -1) {
                state.cart.splice(index, 1)
            }
            setLocalStorage(state.cart, 'cart');
        },
        resetCart: (state, action) => {
            // Xóa các sản phẩm đã đặt hàng khỏi giỏ hàng
            const orderedProductIds = action.payload.map(item => item.productId);
            state.cart = state.cart.filter(item => !orderedProductIds.includes(item.id));
            setLocalStorage(state.cart, 'cart');
        }
    }
})
export const { addToCart, updateToCart, removeToCart, resetCart } = cartSlice.actions
export default cartSlice.reducer;