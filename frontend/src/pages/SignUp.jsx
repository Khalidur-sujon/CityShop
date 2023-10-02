import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//image
import SignUpImage from "../assests/login-animation.gif";
//icons
import { BiShow, BiHide } from "react-icons/bi";

//utils
import ImageToBase64 from "../utils/ImageToBase64.js";
//config
import config from "../frontEndConfig";

function SignUp() {
	const navigate = useNavigate();
	//password show state
	const [showPassword, setshowPassword] = useState(false);
	const [showConfirmPassword, setshowConfirmPassword] = useState(false);
	const [data, setdata] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		image: "",
	});

	//handle on change
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setdata((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	};

	//handle on submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		const { firstName, lastName, email, password, confirmPassword } = data;

		if (firstName && lastName && email && password && confirmPassword) {
			//check if password and confirm password are same
			if (password === confirmPassword) {
				const fetchData = await fetch(
					import.meta.env.VITE_APP_SERVER_DOMAIN + "user/signUp",
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
				if (alert) {
					navigate("/login");
				}
			} else {
				alert("Password and Confirm Password not equal");
			}
		} else {
			alert("Please Enter require fields");
		}
	};

	//handle password show or hide
	const handleShowPassword = () => {
		setshowPassword((prevState) => !prevState);
	};

	//handle confirm password show or hide
	const handleConfirmShowPassword = () => {
		setshowConfirmPassword((prevState) => !prevState);
	};

	const handleUploadProfileImage = async (e) => {
		const data = await ImageToBase64(e.target.files[0]);

		//set image to data
		setdata((prevData) => {
			return {
				...prevData,
				image: data,
			};
		});
	};

	return (
		<div className="p-3 md:p-4">
			<div className="w-full bg-white max-w-sm m-auto  flex flex-col items-center p-4 shadow-md drop-shadow-md rounded-lg">
				{/* image */}
				<div className="w-20 h-20 shadow-md rounded-full drop-shadow-md overflow-hidden relative">
					<img
						src={data.image ? data.image : SignUpImage}
						alt="signUp_image"
					/>

					{/* image upload option */}
					<label htmlFor="profileImage">
						<div className="absolute h-1/3 bottom-0 bg-slate-500 hover:bg-slate-600 text-white text-center cursor-pointer w-full opacity-70">
							<p className="text-sm p-1 font-semibold">Upload</p>
						</div>
						<input
							type="file"
							accept="image/*"
							id="profileImage"
							className="sr-only"
							onChange={handleUploadProfileImage}
						/>
					</label>
				</div>
				<form className="w-full">
					{/* firstname */}
					<label htmlFor="firstName" className="text-sm font-normal">
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 border-b border-black/60 bg-transparent focus:outline-none
                        placeholder:italic"
						placeholder="Enter First Name"
						value={data.firstName}
						onChange={handleOnChange}
					/>
					{/* lastname */}
					<label htmlFor="lastName" className="text-sm font-normal">
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 border-b border-black/60 bg-transparent focus:outline-none
                        placeholder:italic"
						placeholder="Enter Last Name"
						value={data.lastName}
						onChange={handleOnChange}
					/>
					{/* email */}
					<label htmlFor="email" className="text-sm font-normal">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 border-b border-black/60 bg-transparent focus:outline-none
                        placeholder:italic"
						placeholder="Enter Email Address"
						value={data.email}
						onChange={handleOnChange}
					/>
					{/* password */}
					<label htmlFor="password" className="text-sm font-normal">
						Password
					</label>
					<div className="flex px-2 py-1 mt-1 mb-2 w-full border-b border-black/60">
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							id="password"
							className="w-full  focus:outline-none placeholder:italic"
							placeholder="Enter Password"
							value={data.password}
							onChange={handleOnChange}
						/>
						<span
							className="flex text-xl cursor-pointer"
							onClick={handleShowPassword}
						>
							{showPassword ? (
								<BiShow className="text-green-800" />
							) : (
								<BiHide className="text-red-800" />
							)}
						</span>
					</div>
					{/* confirm password */}
					<label
						htmlFor="confirmPassword"
						className="text-sm font-normal"
					>
						Confirm Password
					</label>
					<div className="flex px-2 py-1 mt-1 mb-2 w-full border-b border-black/60">
						<input
							type={showConfirmPassword ? "text" : "password"}
							name="confirmPassword"
							id="confirmPassword"
							className="w-full  focus:outline-none placeholder:italic"
							placeholder="Confirm Password"
							value={data.confirmPassword}
							onChange={handleOnChange}
						/>
						<span
							className="flex text-xl cursor-pointer"
							onClick={handleConfirmShowPassword}
						>
							{showConfirmPassword ? (
								<BiShow className="text-green-800" />
							) : (
								<BiHide className="text-red-800" />
							)}
						</span>
					</div>
					<button
						className="mt-8 w-full text-white bg-red-600 px-2 py-1 rounded-full max-w-[220px] mx-auto flex justify-center hover:bg-red-800"
						type="submit"
						onClick={handleSubmit}
					>
						Sign Up
					</button>
					<p className="text-left mt-3">
						Already have account ?{" "}
						<Link
							to={"/login"}
							onClick={window.scrollTo({
								top: "0",
								behavior: "smooth",
							})}
							className="text-red-800 underline"
						>
							Login
						</Link>{" "}
					</p>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
