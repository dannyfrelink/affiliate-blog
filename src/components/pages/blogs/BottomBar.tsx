import React, { useEffect, useState } from "react";
import Container from "../../general/Container";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import { useAppContext } from "../../../config/AppContext";
import { getRandomBlogs } from "../../../helpers/getRandomBlogs";
import NextBlog from "./NextBlog";
import H2 from "../../typography/H2";

interface BottomBarProps {
	blogs: Destination[];
	href: string | undefined;
}

const BottomBar: React.FC<BottomBarProps> = ({ blogs, href }) => {
	const { screenSize } = useAppContext();
	const optionalBlogs = blogs.filter((blog) => blog.href !== href);
	const [blogArr, setBlogArr] = useState<BottomBarProps["blogs"]>([]);
	const array = getRandomBlogs(optionalBlogs, 4);

	useEffect(() => {
		setBlogArr(array);
	}, [href, array]);

	return (
		<Container className="rounded-t-none">
			<div className="max-w-[1400px] mx-auto">
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
					className={`grid gap-6 grid-rows-[1fr_1fr_1fr_1fr] ${
						screenSize > 650 &&
						`grid-cols-2 !grid-rows-[1fr_1fr] ${
							screenSize >= 1250 && "!gap-10"
						}`
					}`}
				>
					{blogArr.map((blog, index) => (
						<NextBlog key={index} blog={blog} size="large" />
					))}
				</article>
			</div>
		</Container>
	);
};

export default BottomBar;
