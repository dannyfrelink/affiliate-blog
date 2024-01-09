import React from "react";
import BaseText from "../components/typography/BaseText";
import H3 from "../components/typography/H3";
import BlogImage from "../components/pages/blogs/BlogImage";

interface TextProps {
	children: React.ReactNode;
}

interface ImageProps {
	src: string;
	alt: string;
}

interface TagToComponentMap {
	[key: string]: React.FC<TextProps | ImageProps> | undefined;
}

const tagToComponent: TagToComponentMap = {
	p: BaseText as React.FC<TextProps | ImageProps>,
	image: BlogImage as React.FC<TextProps | ImageProps>,
	h3: H3 as React.FC<TextProps | ImageProps>,
};

function parseHTMLText(text: string, images: any) {
	// Create a new HTML document
	const doc = new DOMParser().parseFromString(text, "text/html");

	// Iterate over each element in the body and create corresponding React components
	const reactComponents = Array.from(doc.body.children).map(
		(element, index) => {
			const TagComponent = tagToComponent[element.tagName.toLowerCase()];

			if (element.tagName.toLowerCase() === "image") {
				// If the element is an <image> tag, replace it with <BlogImage>
				const imageKey = element.textContent || "";
				const src = images.src[imageKey] || "";
				const alt = images.alt[imageKey] || "";

				return React.createElement(BlogImage, {
					key: index,
					src,
					alt,
				});
			} else if (TagComponent) {
				// If a mapping exists, create the React component
				return React.createElement(TagComponent, {
					key: index,
					children: element.innerHTML,
				});
			} else {
				// If no mapping exists, render the original HTML element
				return React.createElement(
					element.tagName.toLowerCase(),
					{ key: index },
					element.innerHTML
				);
			}
		}
	);

	return reactComponents;
}

export default parseHTMLText;
