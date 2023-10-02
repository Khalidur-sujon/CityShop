import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

//image
import SignUpImage from "../assests/login-animation.gif";
//icons
import { BiShow, BiHide } from "react-icons/bi";
import config from "../frontEndConfig";
import { loginRedux } from "../redux/userslice";

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	//password show state
	const [showPassword, setshowPassword] = useState(false);
	const [data, setdata] = useState({
		email: "",
		password: "",
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

		const { email, password } = data;

		if (email && password) {
			const fetchData = await fetch(
				import.meta.env.VITE_APP_SERVER_DOMAIN + "/user/login",
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

			if (responseData.alert) {
				dispatch(loginRedux(responseData.data));
				localStorage.setItem(
					"account",
					JSON.stringify(responseData.data)
				);
				navigate("/");
			}
		} else {
			alert("Please Enter require fields");
		}
	};

	//handle password show or hide
	const handleShowPassword = () => {
		setshowPassword((prevState) => !prevState);
	};

	return (
		<div className="p-3 md:p-4">
			<div className="w-full bg-white max-w-sm m-auto  flex flex-col items-center p-4 shadow-md drop-shadow-md rounded-lg">
				{/* image */}
				<div className="w-20 shadow-md rounded-full drop-shadow-md overflow-hidden">
					<img
						src={data.image ? data.image : SignUpImage}
						alt="signUp_image"
					/>
				</div>

				<form className="w-full">
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
					<div className="text-xs mt-2 text-slate-500">
						<p>Demo Account: test1@mail.com</p>
						<p>password: 123</p>
					</div>

					<button
						className="mt-8 w-full text-white bg-red-600 px-2 py-1 rounded-full max-w-[220px] mx-auto flex justify-center hover:bg-red-800"
						type="submit"
						onClick={handleSubmit}
					>
						Login
					</button>
					<p className="text-left mt-3">
						Don't have account ?{" "}
						<Link to={"/signUp"} className="text-red-800 underline">
							Sign Up
						</Link>{" "}
					</p>
				</form>
			</div>
		</div>
	);
}

export default Login;
