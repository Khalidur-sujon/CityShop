import React, { useState } from "react";
import toast from "react-hot-toast";

import { BsCloudUpload } from "react-icons/bs";
import ImageToBase64 from "../utils/ImageToBase64";
import config from "../frontEndConfig";

function NewProduct() {
	const initialState = {
		name: "",
		category: "",
		image: "",
		price: "",
		description: "",
	};

	const [data, setdata] = useState({
		name: "",
		category: "",
		image: "",
		price: "",
		description: "",
	});

	// handle on change
	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setdata((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	//handle uplaod Image
	const handleUploadImage = async (e) => {
		const data = await ImageToBase64(e.target.files[0]);

		//add image to set data
		setdata((prevData) => {
			return {
				...prevData,
				image: data,
			};
		});
	};

	//handle on submit
	const handleOnSumbit = async (e) => {
		e.preventDefault();

		const { name, category, image, price, description } = data;

		if (name && category && image && price && description) {
			const fetchData = await fetch(
				import.meta.env.VITE_APP_SERVER_DOMAIN + "products/addProduct",
				{
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			const responseData = await fetchData.json();
			toast(responseData.message);

			// reset the form fields to their inital fields
			setdata(initialState);
		} else {
			toast("Enter require fields");
		}
	};

	return (
		<div className="p-4 w-full">
			<form className="m-auto w-full max-w-md bg-white rounded shadow-md drop-shadow-md  flex flex-col p-2">
				<label htmlFor="name" className="font-medium text-slate-800">
					Name
				</label>
				<input
					type="text"
					name="name"
					className="border-1 border-b border-black px-1 my-1 placeholder:italic placeholder:text-sm focus-within:outline-none"
					placeholder="Name of your Product"
					value={data.name}
					onChange={handleOnChange}
				/>
				{/* category */}
				<label htmlFor="category" className="font-medium ">
					Category
				</label>
				<select
					name="category"
					id="category"
					className="italic focus-within:outline-none bg-slate-200.70 rounded-md px-2 py-1 cursor-pointer"
					value={data.category}
					onChange={handleOnChange}
				>
					<option value={"other"} className="italic">
						select category
					</option>
					<option value={"fruits"}>Fruits</option>
					<option value={"vegetable"}>Vegetable</option>
					<option value={"icream"}>Icream</option>
					<option value={"dosa"}>Dosa</option>
					<option value={"pizza"}>Pizza</option>
					<option value={"rice"}>Rice</option>
					<option value={"cake"}>Cake</option>
					<option value={"burger"}>Burger</option>
					<option value={"panner"}>Panner</option>
					<option value={"sandwich"}>Sandwich</option>
				</select>
				{/* image */}
				<label htmlFor="image" className="font-medium text-slate-800">
					Image
					<div className=" h-40 bg-slate-200/70 px-1 my-1 flex items-center justify-center w-full cursor-pointer rounded">
						{data.image ? (
							<img
								src={data.image}
								alt="product_image"
								className="h-full"
							/>
						) : (
							<span>
								<BsCloudUpload className="text-5xl text-blue-600" />
							</span>
						)}

						<input
							type="file"
							name="image"
							id="image"
							accept="image/*"
							className="sr-only"
							onChange={handleUploadImage}
						/>
					</div>
				</label>

				{/* price */}
				<label
					htmlFor="price"
					className="font-medium text-slate-800 m-1"
				>
					Price
				</label>
				<input
					type="text"
					name="price"
					className=" px-1 my-1 border-1 border-b border-black placeholder:italic placeholder:text-sm focus-within:outline-none"
					placeholder="Product price"
					value={data.price}
					onChange={handleOnChange}
				/>
				{/* description */}
				<label
					htmlFor="description"
					className="font-medium text-slate-800 my-1"
				>
					Description
				</label>
				<textarea
					name="description"
					id="description"
					rows="4"
					className="p-1 my-1 bg-slate-200/70 resize-none rounded-md focus-within:outline-none border-1 border-b border-black placeholder:italic placeholder:text-sm"
					placeholder="Product details"
					value={data.description}
					onChange={handleOnChange}
				></textarea>
				<button
					type="submit"
					className="bg-red-500 hover:bg-red-700 text-white text-lg font-medium my-2 drop-shadow-md rounded-md w-3/5 mx-auto"
					onClick={handleOnSumbit}
				>
					Save
				</button>
			</form>
		</div>
	);
}

export default NewProduct;
