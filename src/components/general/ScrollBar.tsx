import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../config/AppContext";
import e from "express";

interface ScrollBarProps {
	children: React.ReactNode;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ children }) => {
	const { screenSize, scrolled, setScrolled } = useAppContext();
	const contentRef = useRef<HTMLDivElement>(null);
	const scrollBarRef = useRef<HTMLButtonElement>(null);
	const scrollBarContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [dragStartY, setDragStartY] = useState<number>(0);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const lastScrolledRef = useRef<number>(scrolled);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsVisible(true);

		if (!isDragging) {
			setIsHovered(false);

			setTimeout(() => {
				setIsVisible(false);
			}, 500);
		}
	};

	useEffect(() => {
		setIsVisible(true);

		const timeoutId = setTimeout(() => {
			if (scrolled === lastScrolledRef.current || !isDragging) {
				setIsVisible(false);
			}
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [scrolled]);

	useEffect(() => {
		lastScrolledRef.current = scrolled;
	}, [scrolled]);

	useEffect(() => {
		if (scrollBarRef.current && contentRef.current && isVisible) {
			const screenHeight = window.innerHeight;
			const contentHeight =
				contentRef.current.getBoundingClientRect().height;

			scrollBarRef.current.style.height = `${
				(screenHeight / contentHeight) * 750
			}px`;

			const classes =
				scrollBarContainerRef.current?.getAttribute("class");
			classes &&
				scrollBarContainerRef.current?.setAttribute(
					"class",
					classes.split(" scrollbar-notVisible")[0]
				);
		} else if (scrollBarContainerRef.current && !isVisible) {
			const classes = scrollBarContainerRef.current.getAttribute("class");
			scrollBarContainerRef.current.setAttribute(
				"class",
				`${classes} scrollbar-notVisible`
			);
		}
	}, [isVisible]);

	useEffect(() => {
		document.addEventListener("mouseup", handleDrop);

		if (screenSize >= 1000) {
			scrollBarContainerRef.current?.addEventListener(
				"mouseenter",
				handleMouseEnter
			);
			scrollBarContainerRef.current?.addEventListener(
				"click",
				handleMouseEnter
			);
			scrollBarContainerRef.current?.addEventListener(
				"mouseleave",
				handleMouseLeave
			);
		}

		return () => {
			document.removeEventListener("mouseup", handleDrop);

			if (screenSize >= 1000) {
				scrollBarContainerRef.current?.removeEventListener(
					"mouseenter",
					handleMouseEnter
				);
				scrollBarContainerRef.current?.removeEventListener(
					"click",
					handleMouseEnter
				);
				scrollBarContainerRef.current?.removeEventListener(
					"mouseleave",
					handleMouseLeave
				);
			}
		};
	}, [isDragging, isVisible, scrollBarRef.current]);

	useEffect(() => {
		if (
			scrollBarRef.current &&
			contentRef.current &&
			!isDragging &&
			isVisible
		) {
			const screenHeight = window.innerHeight;
			const contentHeight =
				contentRef.current.getBoundingClientRect().height;

			const scrolledPercentage =
				scrolled / (contentHeight - screenHeight);
			const scrollBarHeight = (screenHeight / contentHeight) * 750;
			const distance = screenHeight - scrollBarHeight - 16;
			const scrolledDistance = distance * scrolledPercentage;
			const scrollRange = screenHeight - scrollBarHeight - 12;

			scrollBarRef.current.style.marginTop = `${
				scrolledDistance < scrollRange ? scrolledDistance : scrollRange
			}px`;
		}
	}, [scrolled, isDragging, isVisible]);

	const handleClickBar = (e: any) => {
		setIsHovered(true);

		const target = e.target;
		const screenHeight = window.innerHeight;
		const contentHeight =
			contentRef.current?.getBoundingClientRect().height;
		const scrollBarHeight = Number(
			scrollBarRef.current?.style.height.split("px")[0]
		);
		const currentMarginTop = Number(
			scrollBarRef.current?.style.marginTop.split("px")[0]
		);
		const scrollRange = screenHeight - scrollBarHeight - 12;
		const skips =
			contentHeight && (screenHeight / contentHeight) * scrollRange;

		if (
			target.tagName.toLowerCase() !== "button" &&
			scrollBarRef.current &&
			skips
		) {
			let newMarginTop;

			if (currentMarginTop < e.clientY) {
				if (scrollRange - currentMarginTop < skips) {
					newMarginTop = scrollRange;
				} else {
					newMarginTop = currentMarginTop + skips;
				}
			} else {
				if (currentMarginTop < skips) {
					newMarginTop = 0;
				} else {
					newMarginTop = currentMarginTop - skips;
				}
			}

			let scrollPercentage;
			if (currentMarginTop < scrollBarHeight) {
				scrollPercentage = (newMarginTop - 8) / screenHeight;

				const scrollTo =
					scrollPercentage > 0
						? contentHeight && contentHeight * scrollPercentage
						: contentHeight && contentHeight * 0;

				window.scrollTo({
					top: scrollTo,
					// behavior: "smooth",
				});
			} else {
				scrollPercentage = newMarginTop / screenHeight;

				const scrollTo =
					scrollPercentage <= 1
						? contentHeight && contentHeight * scrollPercentage
						: contentHeight && contentHeight * 1;

				window.scrollTo({
					top: scrollTo,
					// behavior: "smooth",
				});
			}
		}
	};

	const handleStartDrag = (e: React.MouseEvent) => {
		setIsDragging(true);
		setDragStartY(e.clientY);

		if (contentRef.current) {
			contentRef.current.style.cursor = "grab";
		}
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
					scrollBarRef.current.getBoundingClientRect().top /
					screenHeight;

				const scrollTo =
					scrollPercentage <= 1
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

	const handleDrop = (e: any) => {
		setIsDragging(false);
		setIsHovered(false);

		if (contentRef.current) {
			contentRef.current.style.cursor = "default";
		}

		setTimeout(() => {
			setIsVisible(false);
		}, 500);
	};

	return (
		<div onMouseMove={screenSize >= 1000 ? handleDrag : () => {}}>
			<div ref={contentRef}>{children}</div>

			<div
				onClick={screenSize >= 1000 ? handleClickBar : () => {}}
				ref={scrollBarContainerRef}
				className={`fixed right-0 inset-y-0 py-2 z-[99] ${
					isHovered && screenSize >= 1000 && "scrollbar-hovered"
				} ${
					screenSize < 750
						? "w-2"
						: screenSize < 1250
						? "w-2.5"
						: "w-3"
				}`}
			>
				<button
					onMouseDown={
						screenSize >= 1000 ? handleStartDrag : () => {}
					}
					tabIndex={-1}
					className={`bg-gray-800 bg-opacity-60 rounded-full ${
						screenSize < 1000 ? "cursor-default" : "cursor-grab"
					} ${
						screenSize < 750
							? "w-1"
							: screenSize < 1250
							? "w-1.5"
							: "w-2"
					}`}
					ref={scrollBarRef}
				></button>
			</div>
		</div>
	);
};

export default ScrollBar;
