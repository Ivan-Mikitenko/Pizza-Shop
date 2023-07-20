import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js';
import cart from './slices/cartSlice.js';
import dataPizza from './slices/pizzasSlice.js';

const store = configureStore({
	reducer: { filter, cart, dataPizza }
});

export default store;
