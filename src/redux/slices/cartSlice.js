import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		totalPrice: 0,
		totalQuantity: 0,
		items: []
	},

	reducers: {
		addProduct: (state, action) => {
			// TODO: сделать добавление totalQuantity
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
		removeProduct: (state, action) => {
			const itemRemove = state.items.find(item => item.id === action.payload);

			if (itemRemove.price) {
				state.totalPrice -= itemRemove.price * itemRemove.quantity;
				state.items = state.items.filter(item => item.id !== action.payload);
			}
		},
		minusProduct: (state, action) => {
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
		emptyCart: state => {
			state.totalPrice = 0;
			state.items = [];
		}
	}
});

export const selectCart = state => state.cart;

export const { addProduct, removeProduct, emptyCart, minusProduct } = cartSlice.actions;
export default cartSlice.reducer;
