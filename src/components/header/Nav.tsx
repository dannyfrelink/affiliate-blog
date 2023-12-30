import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";
import Details from "../general/Details";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
	const { screenSize, activePage, navOpen } = useAppContext();

	const checkActive = (isActive: boolean) => {
		return isActive ? "font-semibold text-secondary" : "";
	};

	return (
		<nav
			className={`absolute h-screen ${
				screenSize < 700
					? `before:fixed before:w-screen before:bg-[#707070] before:opacity-75 ${
							navOpen ? "left-0 before:inset-0" : "-left-[100vw]"
					  }`
					: ""
			}`}
		>
			<ul
				className={`fixed ${
					screenSize < 700
						? `w-[90vw] h-full rounded-r-3xl bg-primary text-black ${
								navOpen &&
								"animate-[menuFadeIn_0.5s_ease-out_forwards]"
						  }`
						: ""
				} px-6 pt-32 text-xl [&>li]:font-semibold [&>li:not(:last-of-type)]:mb-6`}
			>
				<li>
					<NavLink
						className={({ isActive }) => checkActive(isActive)}
						to="/"
					>
						Home
					</NavLink>
				</li>

				<Details
					className="mb-6"
					summary="Blogs"
					summaryClass={`${
						activePage && "text-secondary"
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
