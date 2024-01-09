import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";
import CloseButton from "../general/CloseButton";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
	const { screenSize, navOpen, setNavOpen } = useAppContext();
	const [scrolled, setScrolled] = useState<number>(window.scrollY);
	const [scrolledUp, setScrolledUp] = useState<boolean>();
	const prevScrollYRef = useRef<number>(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY);
			setScrolledUp(prevScrollYRef.current > currentScrollY);
			prevScrollYRef.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const checkActive = (isActive: boolean) => {
		return isActive ? "font-bold text-secondary" : "";
	};

	const handleClick = (e: any) => {
		const target = e.target;
		const tagName = target.tagName.toLowerCase();

		if (tagName === "a") {
			setNavOpen(false);
		}
	};

	return (
		<nav
			onClick={handleClick}
			className={`z-[99] ${scrolled > 250 && scrolledUp && "fixed"} ${
				screenSize < 750 &&
				`fixed h-screen before:fixed before:w-screen before:bg-[#707070] before:opacity-75 ${
					navOpen ? "left-0 before:inset-0" : "-left-[100vw]"
				}`
			}`}
		>
			<ul
				className={`${
					screenSize < 750
						? `w-[90vw] h-full rounded-r-3xl bg-primary pl-6 pr-4 pt-32 [&>li:not(:last-of-type)]:mb-6 ${
								navOpen &&
								"animate-[menuFadeIn_0.5s_ease-out_forwards]"
						  }`
						: `flex before:top-0 before:inset-x-0 before:h-16 before:z-[-1] ${
								scrolled > 250 && scrolledUp
									? "fixed before:fixed top-[18px] before:bg-primary before:shadow-subtle"
									: "absolute before:absolute top-7 text-primary"
						  } ${
								screenSize < 1250
									? "right-[9vw] [&>li:not(:last-child)]:mr-6 [&>div]:mr-4"
									: "right-[10vw] [&>li:not(:last-child)]:mr-10 [&>div]:mr-8"
						  }`
				} text-black text-xl [&>li]:font-semibold`}
			>
				{screenSize < 750 && (
					<CloseButton
						className="absolute top-6 right-4"
						closeMenu={() => setNavOpen(false)}
					/>
				)}

				<li>
					<NavLink
						className={({ isActive }) => checkActive(isActive)}
						to="/"
					>
						Home
					</NavLink>
				</li>

				<li>
					<NavLink
						className={({ isActive }) => checkActive(isActive)}
						to="/blogs"
					>
						Blogs
					</NavLink>
				</li>

				<li>
					<NavLink
						className={({ isActive }) => checkActive(isActive)}
						to="/accommodaties"
					>
						Accommodaties
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) => checkActive(isActive)}
						to="/over-ons"
					>
						Over ons
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
