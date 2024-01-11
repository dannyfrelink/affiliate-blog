import React from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";
import NextBlogs from "./NextBlogs";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import H3 from "../../typography/H3";

interface SideBarProps {
	blogs: Destination[];
	id: number;
}

const SideBar: React.FC<SideBarProps> = ({ blogs, id }) => {
	const { screenSize } = useAppContext();
	return (
		<Container
			className={`${
				screenSize < 750
					? ""
					: screenSize < 1000
					? ""
					: `w-[1150px] ${screenSize < 1250 ? "!px-6" : "!px-10"} ${
							screenSize > 1500 && "w-[900px] !px-12"
					  }`
			}`}
		>
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
		</Container>
	);
};

export default SideBar;
