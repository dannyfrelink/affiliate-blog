import React from "react";
import { useAppContext } from "../../config/AppContext";

interface H2Props {
	children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ children }) => {
	const { screenSize } = useAppContext();
	return (
		<h2
			className={`font-semibold ${
				screenSize < 750
					? "text-lg"
					: screenSize < 1250
					? "text-2xl"
					: "text-3xl"
			}`}
		>
			{children}
		</h2>
	);
};

export default H2;
