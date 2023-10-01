import React, { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
	const inititalData = {
		name: "",
		email: "",
		message: "",
	};

	const [data, setdata] = useState({
		name: "",
		email: "",
		message: "",
	});

	//handle on change
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setdata((prevState) => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};

	//handle submit
	const handleSumbitButton = (e) => {
		e.preventDefault();
		toast("Message send Successfully");
		setdata(inititalData);
	};
	return (
		<>
			<div className="bg-gray-100" id="contact">
				<div className="container mx-auto py-16 px-4">
					<div className="text-center">
						<h1 className="text-4xl font-semibold text-gray-800">
							Contact Us
						</h1>
						<p className="text-gray-600 mt-2">
							We'd love to hear from you!
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10  ">
						{/* Contact Form */}
						<div className="bg-white p-6 rounded-lg shadow-lg drop-shadow-lg">
							<h2 className="text-2xl font-semibold text-gray-800 mb-4">
								Send us a message
							</h2>
							<form>
								<div className="mb-4">
									<label
										className="block text-gray-600 text-sm font-medium mb-2"
										htmlFor="name"
									>
										Your Name
									</label>
									<input
										className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
										type="text"
										id="name"
										name="name"
										placeholder="Your Name"
										value={data.name}
										onChange={handleOnChange}
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-600 text-sm font-medium mb-2"
										htmlFor="email"
									>
										Email Address
									</label>
									<input
										className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
										type="email"
										id="email"
										name="email"
										placeholder="Email Address"
										value={data.email}
										onChange={handleOnChange}
									/>
								</div>
								<div className="mb-4">
									<label
										className="block text-gray-600 text-sm font-medium mb-2"
										htmlFor="message"
									>
										Message
									</label>
									<textarea
										className="w-full px-4 py-2 border rounded-lg h-32 focus:ring focus:ring-blue-300 focus:outline-none resize-none"
										id="message"
										name="message"
										placeholder="Your Message"
										value={data.message}
										onChange={handleOnChange}
									></textarea>
								</div>
								<div className="text-center">
									<button
										className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
										type="submit"
										onClick={handleSumbitButton}
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
						{/* Contact Information */}
						<div className="bg-white p-6 rounded-lg shadow-lg drop-shadow-lg">
							<h2 className="text-2xl font-semibold text-gray-800 mb-4">
								Contact Information
							</h2>
							<div className="mb-4">
								<div className="flex items-center  mb-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2 text-blue-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.293 3.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
										<path
											fillRule="evenodd"
											d="M2 7a7 7 0 1114 0 7 7 0 01-14 0zm2 0a5 5 0 1010 0 5 5 0 00-10 0z"
											clipRule="evenodd"
										/>
									</svg>
									<div>
										<p className="text-gray-600">
											1234 Main Street
										</p>
										<p className="text-gray-600">
											Modhubag, Dhaka
										</p>
										<p className="text-gray-600">
											ZIP Code: 12345
										</p>
									</div>
								</div>
							</div>
							<div className="mb-4">
								<div className="flex items-center  mb-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2 text-blue-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M13 10a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
										<path
											fillRule="evenodd"
											d="M13 2a8 8 0 00-6.1 12.98L1 19l5.02-5.02A8 8 0 1013 2zM7 8a2 2 0 012 2h2a4 4 0 00-4-4v2z"
											clipRule="evenodd"
										/>
									</svg>
									<div>
										<p className="text-gray-600">Email:</p>
										<a
											href="mailto:contact@example.com"
											className="text-blue-600 hover:underline"
										>
											cityShoporg@mail.com
										</a>
									</div>
								</div>
							</div>
							<div>
								<div className="flex items-center ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-2 text-blue-600"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 100 14 7 7 0 000-14zm-1 3a1 1 0 011 1v5a1 1 0 11-2 0V7a1 1 0 011-1z"
											clipRule="evenodd"
										/>
									</svg>
									<div>
										<p className="text-gray-600">Phone:</p>
										<a
											href="tel:+11234567890"
											className="text-blue-600 hover:underline"
										>
											+1 (123) 456-7890
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
