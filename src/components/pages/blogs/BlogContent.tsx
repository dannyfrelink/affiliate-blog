import React from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";
import replaceImageTag from "../../../helpers/replaceImageTag";
import parseHTMLText from "../../../helpers/parseHTMLText";
import H2 from "../../typography/H2";
import TableOfContents from "./TableOfContents";
import { Destination } from "../../../pages/Blogs/BlogOverview";

interface Images {
	src: {
		[image: string]: string;
	};
	alt: {
		[image: string]: string;
	};
}

interface BlogContentProps {
	index: number;
	image?: string;
	text: string;
	images: Images;
	blog: Destination;
}

const BlogContent: React.FC<BlogContentProps> = ({
	index,
	image,
	text,
	images,
	blog,
}) => {
	const { screenSize } = useAppContext();
	const img = image && require(`../../../assets/mockup/${image}`);

	const parsedImg = replaceImageTag(text, images);
	const parsedText = parseHTMLText(parsedImg, images);

	return (
		<div className="relative">
			<Container>
				{index === 0 && (
					<div className="mb-4">
						<H2 className="mb-3">{blog.title}</H2>
						{screenSize < 1000 && (
							<TableOfContents headers={blog.headers} />
						)}
					</div>
				)}

				<div
					className={`[&>img]:w-full [&_img]:rounded-2xl [&_img]:shadow-subtle [&>h3]:font-medium ${
						screenSize < 750
							? "[&>*:not(:last-child)]:mb-3 [&>h2:not(:first-child)]:mt-6 [&>h2]:!mb-2 [&>h3]:!mb-2 [&>img:not(:last-child)]:mb-4 [&>img]:mt-4"
							: screenSize < 1250
							? "[&>*:not(:last-child)]:mb-3.5 [&>h2:not(:first-child)]:mt-7 [&>h2]:!mb-2.5 [&>h3]:!mb-2.5 [&>img:not(:last-child)]:mb-6 [&>img]:mt-6"
							: "[&>*:not(:last-child)]:mb-4 [&>h2:not(:first-child)]:mt-8 [&>h2]:!mb-3 [&>h3]:!mb-3 [&>img:not(:last-child)]:mb-8 [&>img]:mt-8"
					}`}
				>
					{parsedText}
				</div>
			</Container>
			{img && (
				<div
					className={`w-full ${
						screenSize < 550
							? "h-[60vh]"
							: screenSize < 750
							? "h-[75vh]"
							: "h-[85vh]"
					}`}
				>
					<img
						className="absolute w-full z-[-99] max-h-[1000px] object-cover object-center -bottom-6"
						src={img}
						alt="Backdrop"
					/>
				</div>
			)}
		</div>
	);
};

export default BlogContent;
