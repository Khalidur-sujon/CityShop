//internal imports
const User = require("../models/user");

//Route: /user/signUp
const userSignUp = async (req, res) => {
	try {
		const { email } = req.body;

		const user = await User.findOne({ email });

		//if user already exits, then we won't want that
		if (user) {
			res.send({ message: "Email id already register.", alert: false });
		}
		//is not exists
		await User.create(req.body);
		res.send({ message: "Successfully sign up", alert: true });
	} catch (error) {
		res.send({ message: error.message });
	}
};

//Route: /user/login
const userLogin = async (req, res) => {
	try {
		const { email } = req.body;

		const user = await User.findOne({ email });

		if (user) {
			const userData = {
				_id: user._id,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				image: user.image,
			};

			res.send({
				message: "Login Successfull",
				alert: true,
				data: userData,
			});
		} else {
			res.send({
				message: "Email is not available, please sign up first",
				alert: false,
			});
		}
	} catch (error) {
		res.send({ message: error.message });
	}
};

//export
module.exports = {
	userSignUp,
	userLogin,
};
