import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DataPizzaArrayType } from '../../../types/dataPizza';
import { PizzaSlice, Status } from './types';

interface FetchPizzasArg {
	currentPage: number;
	PAGE_LIMIT: number;
	categoryItem: string;
	sortItem: string;
}

export const fetchPizzas = createAsyncThunk<DataPizzaArrayType, FetchPizzasArg>(
	'pizza/fetchPizzasStatus',
	async params => {
		const { currentPage, PAGE_LIMIT, categoryItem, sortItem } = params;

		const { data } = await axios.get<DataPizzaArrayType>(
			`https://64a55a0500c3559aa9bf884c.mockapi.io/items?page=${currentPage}&limit=${PAGE_LIMIT}&${categoryItem}${sortItem}`
		);

		return data;
	}
);

// TODO: сделать добавление разных пицц
const initialState: PizzaSlice = {
	items: [],
	status: Status.LOADING
};

const pizzasSlice = createSlice({
	name: 'pizzasSlice',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPizzas.pending, state => {
				state.status = Status.LOADING;
				state.items = [];
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(fetchPizzas.rejected, state => {
				state.status = Status.ERROR;
				state.items = [];
			});
	}
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
