interface Image {
	[image: string]: string;
}

const replaceImageTags = (text: string, images: Image) => {
	// Use a regular expression to find all occurrences of <imageX> tags
	const regex = /^image(\d+)^/g;

	// Replace each occurrence with the corresponding image value
	const replacedText = text.replace(regex, (match, group1) => {
		const imageKey = `image${group1}`;
		return images[imageKey] || match; // If the image key is not found, keep the original tag
	});

	return replacedText;
};

export default replaceImageTags;

//   // Example usage
//   const exampleText = "<p>Text with image: <image1></p>";
//   const images = {
//     image1: "mountains.png",
//     // ... other image values
//   };

//   const replacedText = replaceImageTags(exampleText, images);
//   console.log(replacedText);
