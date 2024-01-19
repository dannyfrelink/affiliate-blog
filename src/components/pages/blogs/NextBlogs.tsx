import React from "react";
import NextBlog from "./NextBlog";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import { useAppContext } from "../../../config/AppContext";
import { getRandomBlogs } from "../../../helpers/getRandomBlogs";

export interface NextBlogsProps {
	blogs: Destination[];
	id: number;
}

const NextBlogs: React.FC<NextBlogsProps> = ({ blogs, id }) => {
	const { screenSize } = useAppContext();
	const optionalBlogs = blogs.filter((blog) => blog.id !== id);
	const blogsArr = getRandomBlogs(optionalBlogs, 4);

	return (
		<article
			className={`${
				screenSize < 500
					? "[&>*:not(:last-child)]:mb-6"
					: screenSize < 1000
					? "grid grid-cols-2 gap-x-3 gap-y-6"
					: "[&>*:not(:last-child)]:mb-6"
			}`}
		>
			{blogsArr.map((blog, index) => (
				<NextBlog key={index} blog={blog} />
			))}
		</article>
	);
};

export default NextBlogs;
