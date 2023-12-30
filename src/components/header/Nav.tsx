import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
	const { screenSize, activePage } = useAppContext();

	const checkActive = (isActive: boolean) => {
		return isActive ? "font-semibold text-secondary" : "";
	};

	return (
		<nav
			className={`h-screen ${
				screenSize < 700
					? "before:fixed before:w-screen before:inset-0 before:bg-[#707070] before:opacity-75"
					: ""
			}`}
		>
			<ul
				className={`fixed ${
					screenSize < 700
						? "w-[90vw] h-full rounded-r-3xl bg-primary text-black"
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
				<details className="mb-6">
					<summary
						className={`${
							activePage && "text-secondary"
						} font-semibold`}
					>
						Blogs
					</summary>
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
				</details>

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