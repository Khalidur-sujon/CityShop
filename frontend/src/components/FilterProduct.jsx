import React from "react";

import { CiForkAndKnife } from "react-icons/ci";

function FilterProduct({ category, active, handleFilter }) {
	return (
		<div onClick={handleFilter} className="cursor-pointer">
			<div
				className={`${
					active ? "bg-red-600" : "bg-yellow-500"
				}  p-5 rounded-full text-3xl font-bold`}
			>
				<CiForkAndKnife />
			</div>
			<p className="text-center capitalize">{category}</p>
		</div>
	);
}

export default FilterProduct;
