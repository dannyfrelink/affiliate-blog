import React from "react";
import { useAppContext } from "../../config/AppContext";

interface H1Props {
	children: React.ReactNode;
}

const H1: React.FC<H1Props> = ({ children }) => {
	const { screenSize } = useAppContext();
	return (
		<h1
			className={`font-extrabold ${
				screenSize < 750
					? "text-2xl mb-3"
					: screenSize < 1250
					? "text-3xl mb-6"
					: "text-[42px] leading-[44px] mb-10"
			}`}
		>
			{children}
		</h1>
	);
};

export default H1;
