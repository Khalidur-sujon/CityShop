import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
	productList: [],
	cartItem: [],
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setAllProductsIntoReduxState: (state, action) => {
			state.productList = [...action.payload];
		},

		addToReduxCartItem: (state, action) => {
			//construc new item
			const newItem = {
				...action.payload,
				qty: 1,
				total: action.payload.price,
			};

			const existingItemIndex = state.cartItem.findIndex(
				(item) => item._id === newItem._id
			);
			// if already exists, then update the quantity and price
			if (existingItemIndex !== -1) {
				state.cartItem[existingItemIndex].qty += 1;

				const total =
					state.cartItem[existingItemIndex].qty *
					state.cartItem[existingItemIndex].price;

				state.cartItem[existingItemIndex].total = total;

				toast.success("Item added");
			} else {
				// product not exists
				state.cartItem = [...state.cartItem, newItem];

				toast.success("Item added");
			}
		},

		//deleteCartItem
		deleteReduxCartItem: (state, action) => {
			//find the index first
			const productIndex = state.cartItem.findIndex(
				(item) => item._id === action.payload
			);
			state.cartItem.splice(productIndex, 1);

			toast("Cart item deleted");
		},
		//increase the item quantity
		increaseReduxItemQuantity: (state, action) => {
			//find the product index
			const productIndex = state.cartItem.findIndex(
				(item) => item._id === action.payload
			);

			state.cartItem[productIndex].qty += 1;

			const total =
				state.cartItem[productIndex].qty *
				state.cartItem[productIndex].price;
			state.cartItem[productIndex].total = total;

			toast.success("Item quantity increased");
		},
		//decrease the item quantity
		decreaseReduxItemQuantity: (state, action) => {
			//find the product index
			const productIndex = state.cartItem.findIndex(
				(item) => item._id === action.payload
			);

			if (state.cartItem[productIndex].qty > 1) {
				state.cartItem[productIndex].qty -= 1;

				const total =
					state.cartItem[productIndex].qty *
					state.cartItem[productIndex].price;
				state.cartItem[productIndex].total = total;

				toast.success("Item quantity decreased");
			} else {
				state.cartItem.splice(productIndex, 1);

				toast.success("Cart Item Removed");
			}
		},
	},
});

//export
export const {
	setAllProductsIntoReduxState,
	addToReduxCartItem,
	deleteReduxCartItem,
	increaseReduxItemQuantity,
	decreaseReduxItemQuantity,
} = productSlice.actions;
export default productSlice.reducer;
