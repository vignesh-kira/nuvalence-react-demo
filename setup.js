import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react'
	;
import addressBookReducer from "./src/components/addressBook/addressBookSlice";
import addressDetailsReducer from "./src/components/addressDetails/addressDetailsSlice";

export const render = (
	ui, {
		initialState = {},
		store = configureStore({
			reducer: {
				addressBook: addressBookReducer,
				addressDetails: addressDetailsReducer,
			}
		})
	} = {}
) => {
	const Wrapper = ({ children }) => (
		<Provider store={store}>
			{children}
		</Provider>
	);
	return rtlRender(ui, { wrapper: Wrapper });
};
