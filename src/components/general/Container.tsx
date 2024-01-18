import React from "react";
import { useAppContext } from "../../config/AppContext";

interface ContainerProps {
	containerRef?: React.MutableRefObject<null>;
	children: React.ReactNode;
	className?: string;
}

const Container: React.FC<ContainerProps> = ({
	containerRef,
	children,
	className,
}) => {
	const { screenSize } = useAppContext();

	return (
		<section
			ref={containerRef}
			className={`bg-primary rounded-3xl ${className} ${
				screenSize < 750
					? "px-[7.5vw] py-7"
					: screenSize < 1250
					? "px-[9vw] py-12"
					: "px-[10vw] py-16"
			}`}
		>
			{children}
		</section>
	);
};

export default Container;
