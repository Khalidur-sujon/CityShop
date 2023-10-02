import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

//components
import Header from "./components/Header";
import config from "./frontEndConfig";
import { setAllProductsIntoReduxState } from "./redux/productSlice.js";
import { setUserInfo } from "./redux/userslice";
import Footer from "./components/Footer";

function App() {
	const dispatch = useDispatch();
	const productsState = useSelector((state) => state.products.productList);

	const dataFromLocalStorage = JSON.parse(localStorage.getItem("account"));

	useEffect(() => {
		if (dataFromLocalStorage) {
			dispatch(setUserInfo(dataFromLocalStorage));
		}
	}, [dataFromLocalStorage, dispatch]);
	const url = import.meta.env.VITE_APP_SERVER_DOMAIN;
	useEffect(() => {
		(async () => {
			const fetchData = await fetch(
				import.meta.env.VITE_APP_SERVER_DOMAIN +
					"/products/getAllProducts"
			);

			const responseData = await fetchData.json();
			dispatch(setAllProductsIntoReduxState(responseData));
		})();
	}, [dispatch, url]);

	return (
		<>
			<Toaster />
			<div>
				<Header />
				<main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
					<Outlet />
				</main>
				<div className="px-4 sm:px-8 bg-slate-100">
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
