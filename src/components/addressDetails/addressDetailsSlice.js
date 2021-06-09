import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedAddress: {}
};

export const addressDetailsSlice = createSlice({
	name: 'addressDetails',
	initialState,
	reducers: {
		setSelectedAddress: (state, action) => {
			state.selectedAddress = action.payload;
		},
	},
});

export const { setSelectedAddress } = addressDetailsSlice.actions;

export const selectAddressDetails = (state) => state.addressDetails;

export default addressDetailsSlice.reducer;
