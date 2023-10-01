import React, { useRef } from "react";

//components
import ProductCard from "../components/ProductCard";

import { GrPrevious, GrNext } from "react-icons/gr";

function SuggestedFruits({ fruitsProducts }) {
	const sliderRef = useRef();

	//handle next slide
	const nextProduct = () => {
		const slider = sliderRef.current;

		slider.scrollLeft += 200;

		if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
			slider.scrollLeft = 0;
		}
	};

	//handle previous slide
	const prevProduct = () => {
		sliderRef.current.scrollLeft -= 200;
	};

	return (
		<div className="w-full">
			<div className="w-full flex justify-between items-center">
				<h1 className="text-2xl font-semibold text-slate-800">
					Fresh Fruits
				</h1>
				{/* icons */}
				<div className=" flex justify-between items-center gap-x-10">
					<button
						className="bg-slate-300 p-1 rounded-lg hover:bg-slate-400 cursor-pointer"
						onClick={prevProduct}
					>
						<GrPrevious />
					</button>
					<button
						className="bg-slate-300 p-1 rounded-lg hover:bg-slate-400 cursor-pointer"
						onClick={nextProduct}
					>
						<GrNext />
					</button>
				</div>
			</div>

			{/* product Card */}
			<div
				className="w-full flex  items-center justify-center mt-8 gap-x-5 whitespace-nowrap  scrollbar-none transition-all overflow-scroll scroll-smooth"
				ref={sliderRef}
			>
				{fruitsProducts.map((item, index) => (
					<ProductCard key={index} item={item} />
				))}
			</div>
		</div>
	);
}

export default SuggestedFruits;
