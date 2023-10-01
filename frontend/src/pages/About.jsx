import React from "react";
import about_us from "../assests/about_us.webp";

function About() {
	return (
		<section className="bg-gray-100 py-16" id="about">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap  justify-between items-center -mx-4">
					<div className="w-full lg:w-1/2 max-w-[480px] px-4">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">
							About Our Store
						</h2>
						<p className="text-slate-600 leading-relaxed mb-8 font-medium italic ">
							At City, we are passionate about making your daily
							cooking experience enjoyable and hassle-free. Our
							mission is to provide you with the highest quality
							cooking essentials and kitchen gadgets to enhance
							your culinary journey.
						</p>
						<p className="text-slate-600 leading-relaxed mb-8 font-medium italic">
							Whether you are a professional chef or a home cook,
							we've got you covered. From premium cookware and
							utensils to fresh ingredients and innovative kitchen
							tools, we curate a wide range of products to meet
							your cooking needs.
						</p>
						<p className="text-slate-600 leading-relaxed mb-8 font-medium italic">
							Our team of experts is dedicated to sourcing the
							finest products that combine functionality, style,
							and durability. We believe that cooking is an art,
							and the right tools can transform it into a
							delightful experience.
						</p>
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<img
							src={about_us} // Replace with your image URL
							alt="About Us"
							className="rounded-lg shadow-lg h-96 w-[90%]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
