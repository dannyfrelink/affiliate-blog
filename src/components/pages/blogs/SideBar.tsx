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
// ${
// 	scrolled > 500 && scrolledUp
// 		? "h-[calc(100vh-4.5rem)] top-[4.5rem]"
// 		: "h-screen top-0"
// }
const SideBar: React.FC<SideBarProps> = ({ blogs, id }) => {
	const { screenSize, scrolled, scrolledUp } = useAppContext();
	return (
		<Container
			className={`${
				screenSize < 750
					? ""
					: screenSize < 1000
					? ""
					: `sticky h-screen overflow-y-scroll w-[1150px] rounded-l-none ${
							scrolled > 600 && scrolledUp
								? "top-[4.5rem]"
								: "top-0"
					  } ${screenSize < 1250 ? "!px-6" : "!px-10"} ${
							screenSize > 1500 && "w-[900px] !px-12"
					  }`
			}`}
		>
			<div className={``}>
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

				<div className="mt-10">
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
