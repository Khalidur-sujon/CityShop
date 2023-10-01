import React from "react";
import { useDispatch } from "react-redux";

import { AiFillDelete } from "react-icons/ai";
import {
	deleteReduxCartItem,
	increaseReduxItemQuantity,
	decreaseReduxItemQuantity,
} from "../redux/productSlice";

function CartProducts({ item }) {
	const dispatch = useDispatch();

	//handle delete cart product
	const handleDeleteCartProduct = (productId) => {
		dispatch(deleteReduxCartItem(productId));
	};

	//handle increase qunantity
	const handleIncreaseItemQunatity = (productId) => {
		dispatch(increaseReduxItemQuantity(productId));
	};

	//handle decreae quantity
	const handleDecreaseItemQunatity = (productId) => {
		dispatch(decreaseReduxItemQuantity(productId));
	};

	return (
		<>
			<div className="px-2 py-3 bg-slate-200 rounded-md flex justify-between ">
				<div className="flex">
					<div className="">
						<img
							src={item.image}
							alt=""
							className="w-32 h-32 md:w-34 md:h-32  rounded-lg"
						/>
					</div>
					{/* text */}
					<div className="ml-5 flex flex-col gap-y-2 justify-center">
						<h4 className="text-xl font-bold">{item.name}</h4>
						<p className="text-base font-normal text-slate-500">
							{item.category}
						</p>
						<p className="text-sm font-semibold">
							<span className="text-red-700">$</span>
							{item.price}
						</p>
						<div className="flex gap-x-2 items-center">
							<button
								type="button"
								className="bg-slate-300 w-5 h-5 flex items-center justify-center text-black"
								onClick={() =>
									handleIncreaseItemQunatity(item._id)
								}
							>
								+
							</button>
							<div className="border border-slate-300 px-3 h-5 flex items-center justify-center">
								{item.qty}
							</div>
							<button
								type="button"
								className="bg-slate-300 w-5 h-5 flex items-center justify-center text-black"
								onClick={() =>
									handleDecreaseItemQunatity(item._id)
								}
							>
								-
							</button>
						</div>
					</div>
				</div>

				{/* delete icon and total container  */}
				<div className="h-full  flex flex-col gap-y-[85px] items-end justify-between px-2  ">
					{/* icon */}
					<button
						type="button"
						className="cursor-pointer"
						onClick={() => handleDeleteCartProduct(item._id)}
					>
						<AiFillDelete />
					</button>
					{/* total */}

					<p className="font-semibold text-slate-800">
						Total: <span className="text-red-700">$</span>
						{item.total}
					</p>
				</div>
			</div>
		</>
	);
}

export default CartProducts;
