import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, ThunkAPI) => {
	const { currentPage, PAGE_LIMIT, categoryItem, sortItem } = params;
	const { data } = await axios.get(
		`https://64a55a0500c3559aa9bf884c.mockapi.io/items?page=${currentPage}&limit=${PAGE_LIMIT}&${categoryItem}${sortItem}`
	);

	// if (data.length === 0) {
	// 	ThunkAPI.rejectWithValue('Пиццы пустые');
	// }
	// return ThunkAPI.fulfillWithValue(data);

	return data;
});

const pizzasSlice = createSlice({
	name: 'pizzasSlice',
	initialState: {
		items: [],
		status: 'loading' // loading | success | error
	},
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		}
	},
	//TODO: переделать из объектной нотации в builder callback
	extraReducers: builder => {
		builder
			.addCase(fetchPizzas.pending, state => {
				state.status = 'loading';
				state.items = [];
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'success';
			})
			.addCase(fetchPizzas.rejected, state => {
				state.status = 'error';
				state.items = [];
			});
	}
});

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
