import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSlice } from './types';

const initialState: FilterSlice = {
	searchValue: '',
	indexFilter: 0,
	indexSort: 0,
	currentPage: 1
};

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState,
	reducers: {
		setActiveSort: (state, action: PayloadAction<number>) => {
			state.indexSort = action.payload;
		},
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload;
		},
		setActiveFilter: (state, action: PayloadAction<number>) => {
			state.indexFilter = action.payload;
		},
		setURLFilter: (state, action: PayloadAction<FilterSlice>) => {
			state.currentPage = action.payload.currentPage;
			state.indexFilter = action.payload.indexFilter;
			state.indexSort = action.payload.indexSort;
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		}
	}
});

export const { setActiveSort, setSearchValue, setActiveFilter, setCurrentPage, setURLFilter } =
	filterSlice.actions;
export default filterSlice.reducer;
