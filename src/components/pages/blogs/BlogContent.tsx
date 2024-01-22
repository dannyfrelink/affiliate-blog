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
		[image: string]: string | undefined;
	};
	alt: {
		[image: string]: string | undefined;
	};
}

interface BlogContentProps {
	index: number;
	image?: {
		src: string;
		alt: string;
	};
	text: string | undefined;
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
	const img =
		image && require(`../../../assets/pages/blogposts/${image.src}`);

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

				<article
					className={`[&>img]:w-full [&_img]:rounded-2xl [&_img]:shadow-subtle [&_h3]:font-medium ${
						screenSize < 750
							? "[&>*:not(:last-child)]:mb-3 [&>div:not(:first-child)>h2]:mt-6 [&_h2]:!mb-2 [&_h3]:!mb-2 [&>img:not(:last-child)]:mb-4 [&>img]:mt-4"
							: screenSize < 1250
							? "[&>*:not(:last-child)]:mb-3.5 [&>div:not(:first-child)>h2]:mt-7 [&_h2]:!mb-2.5 [&_h3]:!mb-2.5 [&>img:not(:last-child)]:mb-6 [&>img]:mt-6"
							: "[&>*:not(:last-child)]:mb-4 [&>div:not(:first-child)>h2]:mt-14 [&_h2]:!mb-3 [&_h3]:!mb-3 [&>img:not(:last-child)]:mb-8 [&>img]:mt-8"
					}`}
				>
					{parsedText}
				</article>
			</Container>
			{img && (
				<div
					className={`w-full relative ${
						screenSize < 550
							? "h-[60vh]"
							: screenSize < 750
							? "h-[75vh]"
							: "h-[85vh]"
					}`}
				>
					<img
						className={`absolute w-full z-[-99] max-h-[1000px] object-cover object-center -top-6 ${
							screenSize < 550
								? "h-[calc(60vh+48px)]"
								: screenSize < 750
								? "h-[calc(75vh+48px)]"
								: "h-[calc(85vh+48px)]"
						}`}
						src={img}
						alt={image.alt}
					/>
				</div>
			)}
		</div>
	);
};

export default BlogContent;
