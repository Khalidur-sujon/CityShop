import { Link, useLocation } from "react-router-dom";
import * as ScrollLink from "react-scroll";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

//import logo
import cityShop from "../assests/cityShop.png";
//import icons
import { BsCartFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { logoutRedux } from "../redux/userslice";

function Header() {
	const location = useLocation();
	//menu state
	const [showMenu, setshowMenu] = useState(false);
	const [mobileMenu, setmobileMenu] = useState(false);

	const isHomePage = location.pathname === "/";

	const dispatch = useDispatch();
	const userState = useSelector((state) => state.user.userInfo);

	const cartItems = useSelector((state) => state.products.cartItem);

	//cartItemNumber
	const CartLength = cartItems.reduce((acc, item) => acc + item.qty, 0);

	//handlelogout
	const handleLogout = () => {
		dispatch(logoutRedux());
		// localStorage.removeItem("account");
		toast("Logout Successfull");
	};

	//toggle mobile menu
	const handleToggleMobileMenu = () => {
		setmobileMenu((prevState) => !prevState);
	};

	//toggole menu
	const handleToggleMenu = () => {
		setshowMenu((prevState) => !prevState);
	};
	return (
		<header className="fixed w-full h-16 shadow-md px-2 py-1 md:px-4 bg-white z-50 ">
			<div className="h-full flex items-center justify-between relative">
				{/* logo */}

				<div
					className="font-bold text-black cursor-pointer md:hidden"
					onClick={handleToggleMobileMenu}
				>
					<AiOutlineMenu />
				</div>

				<Link to="/" className="hidden md:block">
					<img src={cityShop} alt="logo_image" className="w-8 h-8" />
				</Link>

				{/* nav items */}

				<div className="flex items-center gap-x-4 md:gap-x-7">
					{isHomePage ? (
						<>
							<nav className=" gap-4 md:gap-6 text-base hidden md:flex md:text-lg">
								<ScrollLink.Link
									to="home"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className="cursor-pointer"
								>
									Home
								</ScrollLink.Link>
								<Link to={"menu"}> Menu</Link>
								<ScrollLink.Link
									to="about"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className="cursor-pointer"
								>
									About
								</ScrollLink.Link>
								<ScrollLink.Link
									to="contact"
									spy={true}
									smooth={true}
									offset={-50}
									duration={500}
									className="cursor-pointer"
								>
									Contact
								</ScrollLink.Link>
							</nav>
						</>
					) : (
						<>
							<nav className=" gap-4 md:gap-6 text-base hidden md:flex md:text-lg">
								<Link to={""}>Home</Link>
								<Link to={"menu"}> Menu</Link>
								<Link to={"about"}>About</Link>
								<Link to={"contact"}>Contact</Link>
							</nav>
						</>
					)}

					{/* cart and user icon */}
					<div className="relative cursor-pointer">
						<Link to="cart">
							<BsCartFill className="text-xl md:text-2xl text-slate-600 " />
							<div className="absolute w-4 h-4 bg-red-500 text-white flex items-center justify-center rounded-full p-0 -top-1 -right-1 text-xs">
								{CartLength}
							</div>
						</Link>
					</div>
					<div>
						<div
							className="text-slate-600 cursor-pointer"
							onClick={handleToggleMenu}
						>
							{userState && userState.email && userState.image ? (
								<img
									src={userState?.image}
									alt="userimage"
									className="w-6 h-6 rounded-full"
								/>
							) : (
								<HiOutlineUserCircle className="text-3xl md:text-4xl " />
							)}
						</div>
						{showMenu && (
							<div className="absolute right-3 bg-white shadow drop-shadow-md py-3 px-2 top-[110%] rounded-md text-center">
								<div className="flex flex-col">
									{userState.email === "test1@mail.com" && (
										<Link
											to={"newProduct"}
											className="whitespace-nowrap cursor-pointer hover:text-orange-500"
										>
											New Product
										</Link>
									)}

									{userState.email ? (
										<p
											className="whitespace-nowrap cursor-pointer hover:text-orange-500"
											onClick={handleLogout}
										>
											Logout
										</p>
									) : (
										<Link
											to={"login"}
											className="whitespace-nowrap cursor-pointer hover:text-orange-500"
										>
											Login
										</Link>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
				{/* mobileMenu */}
				<div
					className={`${
						mobileMenu
							? "left-0 transition-all duration-500 "
							: "-left-[100%] transition-all duration-600"
					}  absolute top-[115%]  h-[300px] w-[200px] bg-slate-200 z-[50] rounded-lg `}
				>
					<div className="absolute top-3 right-3 cursor-pointer hover:text-red-600">
						<div
							className="cursor-pointer bg-red-500 p-0.5 text-white rounded-md"
							onClick={handleToggleMobileMenu}
						>
							<AiOutlineClose className="font-bold" />
						</div>
					</div>
					<nav className="h-full w-full  flex flex-col items-center  text-lg font-bold italic text-slate-600 my-14 gap-y-5">
						<Link to={""} className="hover:text-slate-800">
							Home
						</Link>
						<Link to={"menu"} className="hover:text-slate-800">
							{" "}
							Menu
						</Link>
						<Link to={"about"} className="hover:text-slate-800">
							About
						</Link>
						<Link to={"contact"} className="hover:text-slate-800">
							Contact
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
