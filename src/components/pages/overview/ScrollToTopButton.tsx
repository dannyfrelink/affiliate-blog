import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useAppContext } from "../../../config/AppContext";

interface ScrollToTopButtonProps {}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { screenSize } = useAppContext();

	const handleScroll = () => {
		const scrolled = window.scrollY;
		setIsVisible(scrolled > 1500);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: screenSize < 750 ? 500 : screenSize < 1250 ? 800 : 1000,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`${isVisible ? "flex" : "hidden"} ${
				screenSize < 750
					? "bottom-6 right-4 w-10 h-10 [&>svg]:text-xl"
					: screenSize < 1250
					? "bottom-8 right-6 w-12 h-12"
					: "bottom-10 right-8 w-14 h-14 [&>svg]:text-3xl"
			} fixed bg-tertair text-primary shadow-subtle opacity-80 justify-center items-center rounded-full cursor-pointer`}
			onClick={scrollToTop}
		>
			<ArrowUpwardIcon />
		</div>
	);
};

export default ScrollToTopButton;
