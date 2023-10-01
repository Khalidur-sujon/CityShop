import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	// _id: "",
	// firstName: "",
	// lastName: "",
	// email: "",
	// image: "",
	userInfo: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
		},

		loginRedux: (state, action) => {
			state.userInfo = action.payload;
		},
		logoutRedux: (state, action) => {
			state.userInfo = [];
			localStorage.removeItem("account");
		},
	},
});

//exports
export const { loginRedux, logoutRedux, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
