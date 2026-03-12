
//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: 'title Drawer',
    contentComponent: <div>default</div>,
    handleSubmit: (value) => {
        console.log('submit');
    }
}
//state: string, bool, num, jsx, component, function

const DrawerReducer = createSlice({
    name: 'DrawerReducer',
    initialState,
    reducers: {
        changeContentDrawerAction: (state, action) => {
            const { title, contentComponent } = action.payload;
            state.title = title;
            state.contentComponent = contentComponent;
        }
        ,
        changeFunctionSubmit: (state, action) => {
            state.handleSubmit = action.payload
        }
    }
});

export const { changeContentDrawerAction, changeFunctionSubmit } = DrawerReducer.actions

export default DrawerReducer.reducer