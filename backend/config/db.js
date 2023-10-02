//external imports
const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", false);

		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Database is connected");
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

//export
module.exports = connectDB;
