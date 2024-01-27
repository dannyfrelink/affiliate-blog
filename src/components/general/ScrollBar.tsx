import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../config/AppContext";

interface ScrollBarProps {
	children: React.ReactNode;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ children }) => {
	const { scrolled, setScrolled } = useAppContext();
	const contentRef = useRef<HTMLDivElement>(null);
	const scrollBarRef = useRef<HTMLButtonElement>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [dragStartY, setDragStartY] = useState<number>(0);

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
		if (scrollBarRef.current && contentRef.current && !isDragging) {
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
	}, [scrolled, isDragging]);

	const handleStartDrag = (e: React.MouseEvent) => {
		setIsDragging(true);
		setDragStartY(e.clientY);
	};

	const handleDrag = (e: React.MouseEvent) => {
		if (isDragging && scrollBarRef.current && contentRef.current) {
			const screenHeight = window.innerHeight;
			const contentHeight =
				contentRef.current.getBoundingClientRect().height;
			const scrollBarHeight = Number(
				scrollBarRef.current?.style.height.split("px")[0]
			);
			const currentMarginTop = Number(
				scrollBarRef.current?.style.marginTop.split("px")[0]
			);
			const scrollRange = screenHeight - scrollBarHeight - 12;
			const dragDistance = e.clientY - dragStartY;

			let newMarginTop;
			if (currentMarginTop < 0) {
				newMarginTop = 0;
			} else if (currentMarginTop >= scrollRange) {
				if (e.clientY > dragStartY) {
					newMarginTop = scrollRange;
				} else {
					newMarginTop = currentMarginTop + dragDistance;
				}
			} else {
				newMarginTop = currentMarginTop + dragDistance;
			}
			scrollBarRef.current.style.marginTop = `${newMarginTop}px`;

			let scrollPercentage;
			if (
				scrollBarRef.current.getBoundingClientRect().top <
				scrollBarHeight
			) {
				scrollPercentage =
					(scrollBarRef.current.getBoundingClientRect().top - 8) /
					screenHeight;

				const scrollTo =
					scrollPercentage > 0
						? contentHeight * scrollPercentage
						: contentHeight * 0;

				setScrolled(scrollTo);
				window.scrollTo({
					top: scrollTo,
				});
			} else {
				scrollPercentage =
					(scrollBarRef.current.getBoundingClientRect().top - 8) /
					screenHeight;

				const scrollTo =
					scrollPercentage < 1
						? contentHeight * scrollPercentage
						: contentHeight * 1;

				setScrolled(scrollTo);
				window.scrollTo({
					top: scrollTo,
				});
			}

			setDragStartY(e.clientY);
		}
	};

	const handleDrop = () => {
		setIsDragging(false);
	};

	return (
		<div onMouseMove={handleDrag} onMouseUp={handleDrop}>
			<div ref={contentRef}>{children}</div>

			<div
				onMouseDown={handleStartDrag}
				className="fixed right-1.5 inset-y-2 w-2 z-[99]"
			>
				<button
					tabIndex={-1}
					className="w-full bg-gray-900 bg-opacity-100 rounded-full"
					ref={scrollBarRef}
				></button>
			</div>
		</div>
	);
};

export default ScrollBar;
