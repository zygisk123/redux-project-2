import {createSlice} from '@reduxjs/toolkit';

const initialCartState = {
    cartIsActive: false,
    notification: null,
};
const cartSliceUI = createSlice({
    name: 'cartUI',
    initialState: initialCartState,
    reducers: {
        toggleCart(state) {
            state.cartIsActive = !state.cartIsActive;
        },
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message,
            };
        },
    },
})

export const uiActions = cartSliceUI.actions;

export default cartSliceUI;