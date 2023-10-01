import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//components
import FilterProduct from "./FilterProduct";
import FilteredProductCard from "./FilteredProductCard";

function AllProducts({ heading }) {
	const [filterBy, setfilterBy] = useState("");
	const [filteredProducts, setfilteredProducts] = useState([]);

	const productData = useSelector((state) => state.products.productList);
	//category list
	const categoryList = [...new Set(productData.map((item) => item.category))];

	//for first time, show all products as filtered products
	useEffect(() => {
		setfilteredProducts(productData);
	}, [productData]);

	//handle filter category
	const handleFilterCategory = (productCategory) => {
		setfilterBy(productCategory);
		const filter = productData.filter(
			(item) =>
				item.category.toLowerCase() === productCategory.toLowerCase()
		);

		setfilteredProducts([...filter]);
	};

	const loadingArrayFeature = new Array(10).fill(null);

	return (
		<div className="my-10 w-full">
			<h1 className="text-slate-900 text-2xl font-bold">{heading}</h1>

			{/* category */}
			<div className="my-8 flex justify-center gap-x-5  overflow-scroll scrollbar-none">
				{categoryList[0] &&
					categoryList.map((item, index) => (
						<FilterProduct
							key={index}
							category={item}
							active={
								item.toLowerCase() === filterBy.toLowerCase()
							}
							handleFilter={() => handleFilterCategory(item)}
						/>
					))}
			</div>
			{/* products */}
			<div className="w-full flex items-center  whitespace-nowrap justify-center flex-wrap gap-9 my-10">
				{filteredProducts[0]
					? filteredProducts.map((item, index) => {
							return (
								<FilteredProductCard
									key={index}
									name={item.name}
									image={item.image}
									price={item.price}
									category={item.category}
									_id={item._id}
								/>
							);
					  })
					: loadingArrayFeature.map((item, index) => (
							<FilteredProductCard
								loading={"loading..."}
								key={index}
							/>
					  ))}
			</div>
		</div>
	);
}

export default AllProducts;
