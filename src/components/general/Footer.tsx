import React from "react";
import BaseText from "../typography/BaseText";
import { useAppContext } from "../../config/AppContext";
import ScrollToTopButton from "../pages/overview/ScrollToTopButton";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	const { screenSize } = useAppContext();
	return (
		<div>
			<ScrollToTopButton />
			<div
				className={`flex items-center justify-center relative before:bg-background before:absolute before:inset-0 before:-top-6 before:z-[-99] ${
					screenSize < 750
						? "h-12 before:h-[4.5rem]"
						: screenSize < 1250
						? "h-[3.5rem] before:h-20"
						: "h-16 before:h-[5.5rem]"
				}`}
			>
				<BaseText>© Copyright Lorem Ipsum</BaseText>
			</div>
		</div>
	);
};

export default Footer;
