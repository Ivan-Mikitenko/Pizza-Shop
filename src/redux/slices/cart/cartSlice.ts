import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType } from '../../../types/cartType';
import { CartSlice } from './types';

const initialState: CartSlice = {
	totalPrice: 0,
	totalQuantity: 0,
	items: []
};

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,

	reducers: {
		addProduct: (state, action: PayloadAction<CartType>) => {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.quantity++;
			} else {
				state.items.push({
					...action.payload,
					quantity: 1
				});
			}

			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.quantity + sum;
			}, 0);
		},
		minusProduct: (state, action: PayloadAction<number>) => {
			const itemDecrease = state.items.find(item => item.id === action.payload);

			if (itemDecrease) {
				if (itemDecrease.quantity > 1) {
					itemDecrease.quantity--;
					state.totalPrice -= itemDecrease.price;
				} else {
					state.totalPrice -= itemDecrease.price;
					state.items = state.items.filter(item => item.id !== action.payload);
				}
			}
		},
		removeProduct: (state, action: PayloadAction<string>) => {
			const itemRemove = state.items.find(item => String(item.id) === action.payload);

			if (itemRemove) {
				state.totalPrice -= itemRemove.price * itemRemove.quantity;
				state.items = state.items.filter(item => String(item.id) !== action.payload);
			}
		},

		emptyCart: state => {
			state.totalPrice = 0;
			state.items = [];
		}
	}
});

export const { addProduct, removeProduct, emptyCart, minusProduct } = cartSlice.actions;
export default cartSlice.reducer;
