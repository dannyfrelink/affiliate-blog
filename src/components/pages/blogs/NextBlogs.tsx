import React, { useState } from "react";
import NextBlog from "./NextBlog";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import { getRandomBlogs } from "../../../helpers/getRandomBlogs";

export interface NextBlogsProps {
	blogs: Destination[];
	id: number;
}

const NextBlogs: React.FC<NextBlogsProps> = ({ blogs, id }) => {
	const optionalBlogs = blogs.filter((blog) => blog.id !== id);
	const [blogArr, setBlogArr] = useState<NextBlogsProps["blogs"]>([]);
	const array = getRandomBlogs(optionalBlogs, 4);
	blogArr.length === 0 && setBlogArr(array);

	return (
		<article
			className={`grid gap-y-6 grid-rows-[1fr_1fr_1fr_1fr] [&_img]:max-h-[200px]`}
		>
			{blogArr.map((blog, index) => (
				<NextBlog key={index} blog={blog} />
			))}
		</article>
	);
};

export default NextBlogs;
