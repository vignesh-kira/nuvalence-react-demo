import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from "../../apis/addressBook";

const initialState = {
	usersList: [],
	pageSize: 5,
	currentPage: 1,
	fetchUsersListStatus: null
};

export const fetchUsersAsync = createAsyncThunk(
	'addressBook/fetchUsers',
	async (pageNumber = initialState.currentPage, { rejectWithValue }) => {
		try {
			const { data } = await fetchUsers(pageNumber, initialState.pageSize);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.status);
		}
	}
);

export const addressBookSlice = createSlice({
	name: 'addressBook',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersAsync.fulfilled, (state, action) => {
				state.fetchUsersListStatus = 200;
				state.usersList = action?.payload?.results;
				state.currentPage = action?.payload?.info?.page;
			})
			.addCase(fetchUsersAsync.rejected, (state, action) => {
				debugger;
				state.fetchUsersListStatus = action.payload;
			});
	},
});

export const selectAddressBook = (state) => state.addressBook;

export default addressBookSlice.reducer;
