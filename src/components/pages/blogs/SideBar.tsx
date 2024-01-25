import React, { useEffect, useRef, useState } from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";
import NextBlogs from "./NextBlogs";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import H3 from "../../typography/H3";
import TableOfContents from "./TableOfContents";
import Socials from "./Socials";

interface SideBarProps {
	blogs: Destination[];
	href: string | undefined;
}

const SideBar: React.FC<SideBarProps> = ({ blogs, href }) => {
	const { screenSize, scrolled, scrolledUp } = useAppContext();
	const activeBlog = blogs.filter((blog) => blog.href === href)[0];

	return (
		<Container
			className={`rounded-none rounded-tr-2xl ${
				screenSize < 1250
					? "w-2/6 !px-10"
					: `!px-12 ${
							screenSize < 1500 ? "w-[30%]" : "w-[27.5%] !px-16"
					  }`
			}`}
		>
			<div className={`sticky top-0 [&>*:not(:last-child)]:mb-10`}>
				<TableOfContents headers={activeBlog.headers} />

				<section>
					<H3 className="mb-4">Volg ons op</H3>
					<Socials />
				</section>

				<section>
					<H3
						className={`text-center ${
							screenSize < 750
								? "mb-3"
								: screenSize < 1000
								? "mb-4"
								: `!text-left ${
										screenSize < 1250 ? "mb-4" : "mb-5"
								  }`
						}`}
					>
						Ontdek meer
					</H3>

					<NextBlogs blogs={blogs} href={href} />
				</section>
			</div>
		</Container>
	);
};

export default SideBar;
