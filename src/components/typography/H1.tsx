import React from "react";
import { useAppContext } from "../../config/AppContext";
import { useLocation } from "react-router";

interface H1Props {
	children: React.ReactNode;
	subTitle: string;
	isBlog: boolean;
}

const H1: React.FC<H1Props> = ({ children, subTitle, isBlog }) => {
	const { screenSize } = useAppContext();
	const location = useLocation();
	const checkAccom = location.pathname === "/accommodaties";
	const title = children?.toString().toUpperCase();

	return (
		<h1
			className={`font-bold max-w-[1000px] ${
				screenSize < 750
					? `${checkAccom && "!text-3xl"} ${
							isBlog ? "text-3xl" : "text-5xl"
					  } ${subTitle !== "" && "mb-3"}`
					: screenSize < 1250
					? `${isBlog ? "text-5xl" : "text-[75px] leading-[85px]"} ${
							subTitle !== "" && "mb-6"
					  }`
					: `${
							isBlog
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
