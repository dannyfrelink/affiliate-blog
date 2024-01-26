import React, { useEffect, useRef, useState } from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";
import NextBlogs from "./NextBlogs";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import H3 from "../../typography/H3";
import TableOfContents from "./TableOfContents";
import Socials from "./Socials";

interface SideBarProps {
	blogs: Destination[];
	href: string | undefined;
}

const SideBar: React.FC<SideBarProps> = ({ blogs, href }) => {
	const { screenSize, scrolled, scrolledUp } = useAppContext();
	const activeBlog = blogs.filter((blog) => blog.href === href)[0];
	const sidebarRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [oldScroll, setOldScroll] = useState<number>(0);
	const [topValue, setTopValue] = useState<number>(0);
	const [initialStick, setInitialStick] = useState<boolean>(false);

	useEffect(() => {
		if (contentRef.current && sidebarRef.current) {
			let viewportHeight = window.innerHeight;
			let contentHeight =
				contentRef.current.getBoundingClientRect().height;
			let sidebarTop =
				sidebarRef.current.getBoundingClientRect().top + window.scrollY;

			if (scrolled >= sidebarTop) {
				if (scrolledUp) {
					// When the user scrolls back up
					let scrollAmount = oldScroll - scrolled;

					if (topValue > -100) {
						setTopValue((prevValue) => prevValue - scrollAmount);
					} else {
						setTopValue(-100);
					}

					setOldScroll(scrolled);
				} else if (
					initialStick &&
					topValue < contentHeight - viewportHeight + 50
				) {
					// When the user scrolls back down midway blog
					if (topValue === -100) {
						setTopValue(-40);
					} else {
						let scrollAmount = oldScroll - scrolled;

						setTopValue((prevValue) => prevValue - scrollAmount);
					}

					setOldScroll(scrolled);
				} else {
					// When the user reaches the bottom of the content
					setTopValue(contentHeight - viewportHeight + 50);
					setInitialStick(true);
					setOldScroll(scrolled);
				}

				// Set styling of position and top
				contentRef.current.style.top = initialStick
					? `${-topValue}px`
					: "";
				contentRef.current.style.position = topValue ? "sticky" : "";
			} else {
				setInitialStick(false);

				// Remove styling of position and top
				contentRef.current.style.position = "";
				contentRef.current.style.top = "";
			}
		}
	}, [scrolled]);

	return (
		<Container
			containerRef={sidebarRef}
			className={`relative rounded-none rounded-tr-2xl ${
				screenSize < 1250
					? "w-2/6 !px-10"
					: `!px-12 ${
							screenSize < 1500 ? "w-[30%]" : "!px-16 w-[27.5%]"
					  }`
			}`}
		>
			<div
				ref={contentRef}
				className={`[&>*:not(:last-child)]:mb-10 max-w-[350px]`}
			>
				<TableOfContents headers={activeBlog.headers} />

				<section>
					<H3 className="mb-4">Volg ons op</H3>
					<Socials />
				</section>

				<section>
					<H3
						className={`text-center ${
							screenSize < 750
								? "mb-3"
								: screenSize < 1000
								? "mb-4"
								: `!text-left ${
										screenSize < 1250 ? "mb-4" : "mb-5"
								  }`
						}`}
					>
						Ontdek meer
					</H3>

					<NextBlogs blogs={blogs} href={href} />
				</section>
			</div>
		</Container>
	);
};

export default SideBar;
