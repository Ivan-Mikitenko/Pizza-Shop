import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState: {
		searchValue: '',
		indexFilter: 0,
		indexSort: 0,
		currentPage: 1
	},
	reducers: {
		setActiveSort: (state, action) => {
			state.indexSort = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setActiveFilter: (state, action) => {
			state.indexFilter = action.payload;
		},
		setURLFilter: (state, action) => {
			state.currentPage = Number(action.payload.currentPage);
			state.indexFilter = Number(action.payload.indexFilter);
			state.indexSort = Number(action.payload.indexSort);
		},
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		}
	}
});

export const { setActiveSort, setSearchValue, setActiveFilter, setCurrentPage, setURLFilter } =
	filterSlice.actions;
export default filterSlice.reducer;
