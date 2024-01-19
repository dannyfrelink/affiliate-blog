import React from "react";
import { useAppContext } from "../../config/AppContext";

interface H1Props {
	children: React.ReactNode;
	subTitle: string;
}

const H1: React.FC<H1Props> = ({ children, subTitle }) => {
	const { screenSize } = useAppContext();
	return (
		<h1
			className={`font-bold max-w-[1000px] ${
				screenSize < 750
					? `text-5xl ${subTitle !== "" && "mb-3"}`
					: screenSize < 1250
					? `text-[75px] leading-[85px] ${subTitle !== "" && "mb-6"}`
					: `text-[100px] leading-[110px] ${
							subTitle !== "" && "mb-10"
					  }`
			}`}
		>
			{children}
		</h1>
	);
};

export default H1;
