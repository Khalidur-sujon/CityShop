import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import browser router
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

//import pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login.jsx";
import NewProduct from "./pages/NewProduct.jsx";
import SignUp from "./pages/SignUp.jsx";
import Cart from "./pages/Cart.jsx";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="menu/:filterBy" element={<Menu />} />
			<Route path="menu" element={<Menu />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="login" element={<Login />} />
			<Route path="newProduct" element={<NewProduct />} />
			<Route path="signUp" element={<SignUp />} />
			<Route path="cart" element={<Cart />} />
			<Route path="success" element={<Success />} />
			<Route path="cancel" element={<Cancel />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
