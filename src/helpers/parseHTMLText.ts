import React from "react";
import BaseText from "../components/typography/BaseText";
import H3 from "../components/typography/H3";
import BlogImage from "../components/pages/blogs/BlogImage";
import H2 from "../components/typography/H2";
import { Element } from "react-scroll";

interface TextProps {
	children: React.ReactNode;
	id?: string;
	className?: string | null;
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
	h2: H2 as React.FC<TextProps | ImageProps>,
	h3: H3 as React.FC<TextProps | ImageProps>,
};

function parseHTMLText(text: string, images: any) {
	// Create a new HTML document
	const doc = new DOMParser().parseFromString(text, "text/html");

	// Iterate over each element in the body and create corresponding React components
	const reactComponents = Array.from(doc.body.children).map(
		(element, index) => {
			const tagName = element.tagName.toLowerCase();
			const TagComponent = tagToComponent[tagName];

			if (tagName === "img") {
				// If the element is an <img/> tag, replace it with <BlogImage>
				const src =
					require(`../assets/mockup/${element.getAttribute(
						"src"
					)}`) || "";
				const alt = element.getAttribute("alt") || "";

				return React.createElement(BlogImage, {
					key: index,
					src,
					alt,
				});
			} else if (tagName === "div") {
				// If the element is a <div> tag, parse HTML children as well
				const className = element.getAttribute("class");
				const divContent: any = parseHTMLText(
					element.innerHTML,
					images
				);

				return React.createElement(
					"div",
					{ key: index, className },
					divContent
				);
			}
			// else if (tagName === "video") {
			// 	// If the element is a <video> tag, parse HTML children as well
			// 	const autoplay = element.getAttribute("autoplay");
			// 	const controls = element.getAttribute("controls");

			// 	console.log(element);

			// 	const divContent: any = parseHTMLText(
			// 		element.innerHTML,
			// 		images
			// 	);

			// 	return React.createElement(
			// 		"video",
			// 		{ key: index, autoplay, controls },
			// 		divContent
			// 	);
			// }
			else if (TagComponent) {
				// If a mapping exists, create the React component
				const name = element.innerHTML
					.split(" ")
					.join("-")
					.toLowerCase();

				if (tagName === "h2") {
					// If h2 tag, create Element component with H2 component inside
					return React.createElement(Element, {
						key: index,
						name,
						children: React.createElement(TagComponent, {
							children: element.innerHTML,
						}),
					});
				} else if (tagName === "p" || tagName === "h3") {
					// If p or h3 tag, create BaseText or H3 component with given class attribute
					const className = element.getAttribute("class");

					return React.createElement(TagComponent, {
						key: index,
						children: element.innerHTML,
						className,
					});
				} else {
					// Render leftover TagComponent elements
					return React.createElement(TagComponent, {
						key: index,
						children: element.innerHTML,
					});
				}
			} else {
				// If no mapping exists, render the original HTML element
				return React.createElement(
					tagName,
					{ key: index },
					element.innerHTML
				);
			}
		}
	);

	return reactComponents;
}

export default parseHTMLText;
