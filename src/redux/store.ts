import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/filterSlice.js';
import cart from './slices/cart/cartSlice.js';
import dataPizza from './slices/pizza/pizzasSlice.js';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const persistConfig = {
	key: 'Cart',
	storage
};

const persistedCartReducer = persistReducer(persistConfig, cart);

const store = configureStore({
	reducer: { filter, cart: persistedCartReducer, dataPizza }
});

export const persistor = persistStore(store);
export default store;
