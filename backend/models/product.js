//external imports
const { Schema, model } = require("mongoose");

//create produc schema
const productSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

//create model
const Product = model("Product", productSchema);

//export model
module.exports = Product;
