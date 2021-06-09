import { configureStore } from '@reduxjs/toolkit';
import addressBookReducer from "../components/addressBook/addressBookSlice";
import addressDetailsReducer from "../components/addressDetails/addressDetailsSlice";

export const store = configureStore({
  reducer: {
    addressBook: addressBookReducer,
    addressDetails: addressDetailsReducer,
  },
});
