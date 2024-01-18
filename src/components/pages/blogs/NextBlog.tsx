import React from "react";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import { useAppContext } from "../../../config/AppContext";
import { Link } from "react-router-dom";
import BaseText from "../../typography/BaseText";
import H3 from "../../typography/H3";

interface NextBlogProps {
	blog: Destination;
	size?: "small" | "large";
}

const NextBlog: React.FC<NextBlogProps> = ({ blog, size = "small" }) => {
	const { screenSize } = useAppContext();
	const coverImage = require(`../../../assets/mockup/${blog.coverImage}`);

	return (
		<Link to={`/blogs/${blog.id}`} className="relative block">
			<img
				className="rounded-2xl w-full"
				src={coverImage}
				alt="Blog Cover"
			/>
			{size === "small" ? (
				<BaseText
					className={`absolute z-10 font-semibold text-primary ${
						screenSize < 750
							? "bottom-4 inset-x-4"
							: screenSize < 1000
							? "bottom-4 inset-x-4"
							: screenSize < 1250
							? "bottom-3 inset-x-3"
							: "bottom-5 inset-x-4"
					}`}
				>
					{blog.title}
				</BaseText>
			) : (
				<H3
					className={`absolute z-10 font-semibold text-primary ${
						screenSize < 750
							? "bottom-4 inset-x-4"
							: screenSize < 1000
							? "bottom-4 inset-x-4"
							: screenSize < 1250
							? "bottom-3 inset-x-3"
							: "bottom-5 inset-x-4"
					}`}
				>
					{blog.title}
				</H3>
			)}
		</Link>
	);
};

export default NextBlog;
