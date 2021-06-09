import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import addressBookReducer from "../components/addressBook/addressBookSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addressBook: addressBookReducer,
  },
});
