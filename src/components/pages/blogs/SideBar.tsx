import React from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";
import NextBlogs from "./NextBlogs";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import H3 from "../../typography/H3";
import TableOfContents from "./TableOfContents";
import { Link } from "react-router-dom";

interface SideBarProps {
	blogs: Destination[];
	id: number;
}

const SideBar: React.FC<SideBarProps> = ({ blogs, id }) => {
	const { screenSize, scrolled, scrolledUp } = useAppContext();
	const activeBlog = blogs.filter((blog) => blog.id === id)[0];

	const socials = [
		{
			src: "icons8-instagram.svg",
			link: "https://www.instagram.com/reis.feeld/",
		},
		{
			src: "icons8-tiktok.svg",
			link: "https://www.tiktok.com/@reis.feeld",
		},
		{
			src: "icons8-youtube.svg",
			link: "https://www.youtube.com/@LisatenHoope",
		},
		{
			src: "icons8-facebook.svg",
			link: "",
		},
	];

	return (
		<Container
			className={`${
				screenSize < 750
					? ""
					: screenSize < 1000
					? ""
					: `sticky h-full w-[1050px] rounded-none rounded-tr-2xl ${
							scrolled > 600 && scrolledUp
								? "top-[2.5rem]"
								: "-top-8"
					  } ${screenSize < 1250 ? "!px-10" : "!px-12"} ${
							screenSize > 1500 && "w-[884px] !px-16"
					  }`
			}`}
		>
			<div className="[&>*:not(:last-child)]:mb-10">
				<TableOfContents headers={activeBlog.headers} />

				<div>
					<H3 className="mb-4">Volg ons op</H3>
					<div className="flex gap-3 [&>*]:w-10">
						{socials.map((social, index) => {
							const src = require(`../../../images/socials/${social.src}`);
							const alt = social.src
								.split("icons8-")[1]
								.split(".svg")[0];

							return (
								<Link
									target="_blank"
									key={index}
									to={social.link}
								>
									<img src={src} alt={alt} />
								</Link>
							);
						})}
					</div>
				</div>

				<div>
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

					<NextBlogs blogs={blogs} id={id} />
				</div>
			</div>
		</Container>
	);
};

export default SideBar;
