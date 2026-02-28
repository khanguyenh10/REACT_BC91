import { createSlice } from "@reduxjs/toolkit";

const saveListSV = (arrSV) => {
    console.log(arrSV);
    const sSV = JSON.stringify(arrSV);
    localStorage.setItem('arrSV', sSV);
}
const getListSV = () => {
    let arrSV = [];
    if (localStorage.getItem('arrSV')) {
        const sSV = localStorage.getItem('arrSV');
        arrSV = JSON.parse(sSV);
    }
    return arrSV;
}
function stringToSlug(str) {
    return str
        .toLowerCase()
        .normalize("NFD")                 // tách dấu
        .replace(/[\u0300-\u036f]/g, "") // xoá dấu
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")    // xoá ký tự đặc biệt
        .trim()
        .replace(/\s+/g, "-")            // space → -
        .replace(/-+/g, "-");            // bỏ -- dư
}
const svSlive = createSlice({
    name: 'svReducer',
    initialState: getListSV(),
    reducers: {
        addSV: (state, action) => {
            // kiểm tra mã SV có tồn tại chưa
            const sv = state.find(sv => sv.maSV === action.payload.maSV)
            if (!sv) {
                state.push(action.payload)
            }
            saveListSV(state);
        },
        updateSV: (state, action) => {
            const sv = state.find(sv => sv.maSV === action.payload.maSV)
            if (sv) {
                sv.hoTenSV = action.payload.hoTenSV;
                sv.email = action.payload.email;
                sv.soDT = action.payload.soDT;
            }
            saveListSV(state);
        },
        xoaSV: (state, action) => {
            // kiểm tra mã SV có tồn tại chưa
            console.log("maSV: " + action.payload)
            const index = state.findIndex(sv => sv.maSV === action.payload)
            if (index !== -1) {
                state.splice(index, 1)
            }
            saveListSV(state);
        },
        timSV: (state, action) => {
            if (action.payload) {
                return state.filter(sv => stringToSlug(sv.hoTenSV).search(stringToSlug(action.payload)) !== -1);
            }
            return getListSV();

        }
    }
})
export const { addSV, xoaSV, updateSV, timSV } = svSlive.actions
export default svSlive.reducer;