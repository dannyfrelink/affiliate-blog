import React from "react";
import { useAppContext } from "../../config/AppContext";

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	const { screenSize } = useAppContext();

	return (
		<section
			className={`bg-primary rounded-3xl shadow-subtle ${className} ${
				screenSize < 750
					? "px-[7.5vw] py-7"
					: screenSize < 1250
					? "px-[9vw] py-10"
					: "px-[10vw] py-12"
			}`}
		>
			{children}
		</section>
	);
};

export default Container;
