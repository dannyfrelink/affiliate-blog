import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";
import Details from "../general/Details";
import CloseButton from "../general/CloseButton";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
	const { screenSize, blogsPageActive, navOpen, setNavOpen } =
		useAppContext();

	const checkActive = (isActive: boolean) => {
		return isActive ? "font-semibold text-secondary" : "";
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
			className={`${
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
						: `flex top-4 fixed before:fixed before:top-0 before:inset-x-0 before:h-16 before:bg-primary before:shadow-subtle before:z-[-1] ${
								screenSize < 1250
									? "right-[calc(100vw*((1/6)/2))] [&>li:not(:last-child)]:mr-6 [&>div]:mr-4"
									: "right-[calc(100vw*((1/5)/2))] [&>li:not(:last-child)]:mr-10 [&>div]:mr-8"
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

				<Details
					className={screenSize < 750 ? "mb-6" : ""}
					summary="Blogs"
					summaryClass={`${
						blogsPageActive && "text-secondary"
					} font-semibold`}
				>
					<li className="font-light italic text-xs my-2">
						<NavLink
							className={({ isActive }) => checkActive(isActive)}
							to="/blogs"
							end
						>
							Alle blogs bekijken
						</NavLink>
					</li>
					<div className="text-base [&>li:not(:last-of-type)]:mb-[5px]">
						<li>
							<NavLink
								className={({ isActive }) =>
									checkActive(isActive)
								}
								to="/blogs/canggu"
								end
							>
								Canggu
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									checkActive(isActive)
								}
								to="/blogs/ubud"
								end
							>
								Ubud
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									checkActive(isActive)
								}
								to="/blogs/uluwatu"
								end
							>
								Uluwatu
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									checkActive(isActive)
								}
								to="/blogs/amed"
								end
							>
								Amed
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									checkActive(isActive)
								}
								to="/blogs/sideman"
								end
							>
								Sideman
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									checkActive(isActive)
								}
								to="/blogs/nusa-dua"
								end
							>
								Nusa Dua
							</NavLink>
						</li>
					</div>
				</Details>

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
