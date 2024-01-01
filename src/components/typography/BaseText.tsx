import React from "react";
import { useAppContext } from "../../config/AppContext";

interface BaseTextProps {
	children: React.ReactNode;
}

const BaseText: React.FC<BaseTextProps> = ({ children }) => {
	const { screenSize } = useAppContext();

	return (
		<p
			className={
				screenSize < 750
					? "text-sm"
					: screenSize < 1250
					? "text-base"
					: "text-lg"
			}
		>
			{children}
		</p>
	);
};

export default BaseText;
