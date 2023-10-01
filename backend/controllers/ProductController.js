//external improts
const Product = require("../models/product");

//api
//Route: /products/addProduct
const uploadProduct = async (req, res) => {
	await Product.create(req.body);
	res.status(200).json({ message: "Product Upload Successfully" });
};

//api
//Route: /products/getAllProducts
const getAllProducts = async (req, res) => {
	const products = await Product.find({});
	res.send(JSON.stringify(products));
};

//exports
module.exports = { uploadProduct, getAllProducts };
