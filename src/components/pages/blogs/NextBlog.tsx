import React from "react";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import H4 from "../../typography/H4";
import { useAppContext } from "../../../config/AppContext";
import { Link } from "react-router-dom";

interface NextBlogProps {
	blog: Destination;
}

const NextBlog: React.FC<NextBlogProps> = ({ blog }) => {
	const { screenSize } = useAppContext();
	const coverImage = require(`../../../images/mockup/${blog.coverImage}`);

	return (
		<Link to={`/blogs/${blog.id}`} className="relative block">
			<img
				className="rounded-2xl w-full"
				src={coverImage}
				alt="Blog Cover"
			/>
			<H4
				className={`absolute z-10 ${
					screenSize < 750
						? "bottom-4 inset-x-4"
						: screenSize < 1000
						? "bottom-4 inset-x-4"
						: screenSize < 1250
						? "bottom-3 inset-x-3"
						: "bottom-5 inset-x-4"
				}`}
				color="white"
			>
				{blog.title}
			</H4>
		</Link>
	);
};

export default NextBlog;
