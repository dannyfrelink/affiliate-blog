import React from "react";
import { useAppContext } from "../../config/AppContext";
import { useLocation } from "react-router";

interface H1Props {
	children: React.ReactNode;
	subTitle: string;
}

const H1: React.FC<H1Props> = ({ children, subTitle }) => {
	const { screenSize } = useAppContext();
	const location = useLocation();
	const checkBlog = /\d/.test(location.pathname);
	const checkAccom = location.pathname === "/accommodaties";
	const title = children?.toString().toUpperCase();

	return (
		<h1
			className={`font-bold max-w-[1000px] ${
				screenSize < 750
					? `${checkAccom && "!text-3xl"} ${
							checkBlog ? "text-3xl" : "text-5xl"
					  } ${subTitle !== "" && "mb-3"}`
					: screenSize < 1250
					? `${
							checkBlog
								? "text-5xl"
								: "text-[75px] leading-[85px]"
					  } ${subTitle !== "" && "mb-6"}`
					: `${
							checkBlog
								? "text-[65px] leading-[75px]"
								: "text-[100px] leading-[110px]"
					  } ${subTitle !== "" && "mb-10"}`
			}`}
		>
			{title}
		</h1>
	);
};

export default H1;
