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
	// const [oldRefScroll, setOldRefScroll] = useState<number>(0);
	const [oldScroll, setOldScroll] = useState<number>(0);
	const [stickyTop, setStickyTop] = useState<number>(0);
	const stickyTopRef = useRef<number>(0);

	useEffect(() => {
		if (
			sidebarRef.current &&
			sidebarRef.current.getBoundingClientRect().y < 0
		) {
			const refScroll = sidebarRef.current.getBoundingClientRect().y;

			if (scrolledUp) {
				const scrollAmount = oldScroll - scrolled;

				console.log(stickyTopRef.current);

				if (stickyTopRef.current < 50) {
					window.requestAnimationFrame(() => {
						stickyTopRef.current += scrollAmount;
					});
				} else {
					stickyTopRef.current = 50;
				}
				setOldScroll(scrolled);
			} else if (refScroll > -1050) {
				stickyTopRef.current = Math.round(refScroll);
				setOldScroll(scrolled);
			} else {
				const scrollAmount = oldScroll - scrolled;

				if (stickyTopRef.current > -1050 && scrollAmount > 0) {
					window.requestAnimationFrame(() => {
						stickyTopRef.current -= scrollAmount;
					});
				} else {
					stickyTopRef.current = -1050;
				}

				setOldScroll(scrolled);
			}
		}
	}, [scrolled]);

	return (
		<Container
			// containerRef={sidebarRef}
			className={`relative min-h-full rounded-none rounded-tr-2xl ${
				screenSize < 1250
					? "w-2/6 !px-10"
					: `!px-12 ${
							screenSize < 1500 ? "w-[30%]" : "w-[27.5%] !px-16"
					  }`
			}`}
		>
			<div
				ref={sidebarRef}
				className={`sticky top-[${stickyTopRef.current}px] h-fit [&>*:not(:last-child)]:mb-10`}
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
