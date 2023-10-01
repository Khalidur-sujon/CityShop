import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AllProducts from "../components/AllProducts";
import { addToReduxCartItem } from "../redux/productSlice";

function Menu() {
	const dispatch = useDispatch();
	const { filterBy } = useParams();
	const productsState = useSelector((state) => state.products.productList);

	const selectedProduct = productsState.filter(
		(item) => item._id === filterBy
	)[0];

	//handle add to cart
	const handleAddToCart = () => {
		dispatch(
			addToReduxCartItem({
				_id: selectedProduct._id,
				name: selectedProduct.name,
				image: selectedProduct.image,
				price: selectedProduct.price,
				category: selectedProduct.category,
			})
		);
	};

	return (
		<div className="p-5">
			{!(selectedProduct === undefined) ? (
				<>
					{/* image and info container  */}
					<div className="w-full max-w-[400px]  h-full flex md:max-w-[800px] flex-col md:flex-row mx-auto bg-white rounded-lg my-4 md:my-10">
						{/* image */}
						<div className="flex-1 flex items-center justify-center">
							<div>
								<img
									src={selectedProduct.image}
									alt="product_image"
									className="w-64 h-64"
								/>
							</div>
						</div>

						{/* bar */}
						<div className="w-[1px] bg-slate-200"></div>

						{/* info */}
						<div className="flex-1 bg-slate-200 py-4">
							<div className="w-full h-full flex justify-center  items-center ">
								<div className="flex flex-col gap-y-3">
									<h3 className="text-3xl font-medium">
										{" "}
										{selectedProduct.name}
									</h3>
									<p className="text-xl text-slate-500 font-semibold">
										{selectedProduct.category}
									</p>
									<p className="text-black text-2xl font-bold">
										<span className="text-red-600">$</span>
										{selectedProduct.price}
									</p>
									<p className="text-slate-500 text-base font-semibold">
										Description:{" "}
										{selectedProduct.description}
									</p>
									<button
										onClick={handleAddToCart}
										type="button"
										className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-1 py-0.5"
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<div>
					<p>Loading ...</p>
				</div>
			)}

			<div>
				<AllProducts heading={"Related Products"} />
			</div>
		</div>
	);
}

export default Menu;
