import React from "react";
import BaseText from "../components/typography/BaseText";
import H3 from "../components/typography/H3";

interface HTMLProps {
	children: React.ReactNode;
}

interface TagToComponentMap {
	[key: string]: React.FC<HTMLProps> | undefined;
}

const tagToComponent: TagToComponentMap = {
	p: BaseText,
	h3: H3,
};

function parseHTMLText(text: string) {
	// Create a new HTML document
	const doc = new DOMParser().parseFromString(text, "text/html");

	// Iterate over each element in the body and create corresponding React components
	const reactComponents = Array.from(doc.body.children).map(
		(element, index) => {
			const TagComponent = tagToComponent[element.tagName.toLowerCase()];

			if (TagComponent) {
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
