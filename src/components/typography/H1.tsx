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
			className={`font-extrabold ${
				screenSize < 750
					? `text-2xl ${subTitle !== "" && "mb-3"}`
					: screenSize < 1250
					? `text-3xl ${subTitle !== "" && "mb-6"}`
					: `text-[42px] leading-[44px] ${subTitle !== "" && "mb-10"}`
			}`}
		>
			{children}
		</h1>
	);
};

export default H1;
