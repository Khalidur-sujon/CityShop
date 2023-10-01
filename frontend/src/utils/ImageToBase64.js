const ImageToBase64 = async (file) => {
	const reader = new FileReader();
	reader.readAsDataURL(file);

	// check weather convert process success or not
	const data = new Promise((resolve, reject) => {
		reader.onload = () => resolve(reader.result);
		reader.onerror = (err) => reject(err);
	});

	return data;
};

export default ImageToBase64;
