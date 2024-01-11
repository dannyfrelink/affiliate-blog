import React from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";
import NextBlogs from "./NextBlogs";
import { Destination } from "../../../pages/Blogs/BlogOverview";

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
					: `w-[1150px] ${screenSize < 1250 ? "!px-6" : "!px-10"}`
			}`}
		>
			<NextBlogs blogs={blogs} id={id} />
		</Container>
	);
};

export default SideBar;
