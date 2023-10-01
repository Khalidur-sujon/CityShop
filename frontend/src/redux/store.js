import { configureStore } from "@reduxjs/toolkit";

import userSliceReducer from "./userslice";
import productSlice from "./productSlice";

export const store = configureStore({
	reducer: {
		user: userSliceReducer,
		products: productSlice,
	},
});
