import React, { useEffect, useRef } from "react";
import { useAppContext } from "../../config/AppContext";

interface ScrollBarProps {
	children: React.ReactNode;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ children }) => {
	const { scrolled } = useAppContext();
	const contentRef = useRef<HTMLDivElement>(null);
	const scrollBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollBarRef.current && contentRef.current) {
			const screenHeight = window.innerHeight;
			const contentHeight =
				contentRef.current.getBoundingClientRect().height;

			scrollBarRef.current.style.height = `${
				(screenHeight / contentHeight) * 800
			}px`;
		}
	}, []);

	useEffect(() => {
		if (scrollBarRef.current && contentRef.current) {
			const screenHeight = window.innerHeight;
			const contentHeight =
				contentRef.current.getBoundingClientRect().height;

			const scrolledPercentage =
				scrolled / (contentHeight - screenHeight);
			const scrollBarHeight = (screenHeight / contentHeight) * 800;
			const distance = screenHeight - scrollBarHeight - 16;
			const scrolledDistance = distance * scrolledPercentage;

			scrollBarRef.current.style.marginTop = `${scrolledDistance}px`;
		}
	}, [scrolled]);

	return (
		<div>
			<div ref={contentRef}>{children}</div>

			<div className="fixed right-1.5 inset-y-2 w-2 z-[99]">
				<div
					className="bg-gray-900 bg-opacity-65 rounded-full"
					ref={scrollBarRef}
				></div>
			</div>
		</div>
	);
};

export default ScrollBar;
