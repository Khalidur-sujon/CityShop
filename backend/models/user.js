const { Schema, model } = require("mongoose");

//create user schema
const UserSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	confirmPassword: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
});

// create model
const User = model("User", UserSchema);

//export
module.exports = User;
