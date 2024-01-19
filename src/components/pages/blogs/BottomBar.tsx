import React from "react";
import Container from "../../general/Container";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import { useAppContext } from "../../../config/AppContext";
import { getRandomBlogs } from "../../../helpers/getRandomBlogs";
import NextBlog from "./NextBlog";
import H2 from "../../typography/H2";

interface BottomBarProps {
	blogs: Destination[];
	id: number;
}

const BottomBar: React.FC<BottomBarProps> = ({ blogs, id }) => {
	const { screenSize } = useAppContext();
	const optionalBlogs = blogs.filter((blog) => blog.id !== id);
	const blogsArr = getRandomBlogs(optionalBlogs, 4);
	return (
		<Container className="rounded-t-none">
			<H2
				className={`text-center ${
					screenSize < 750
						? "mb-5"
						: screenSize < 1250
						? "mb-7"
						: "mb-9"
				}`}
			>
				Ontdek meer
			</H2>

			<article
				className={`grid gap-6 ${
					screenSize < 650
						? ""
						: `grid-cols-2 ${screenSize >= 1250 && "!gap-10"}`
				}`}
			>
				{blogsArr.map((blog, index) => (
					<NextBlog key={index} blog={blog} size="large" />
				))}
			</article>
		</Container>
	);
};

export default BottomBar;
