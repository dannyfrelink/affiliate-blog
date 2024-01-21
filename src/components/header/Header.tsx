import React from "react";
import Nav from "./Nav";
import Button from "../general/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useAppContext } from "../../config/AppContext";
import Title from "./Title";
import LogoPrimary from "../../assets/logo/Logo-ReisFeeld-primary.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
	Image: React.FC<JSX.IntrinsicElements["img"]>;
	title: string;
	subTitle?: string;
	size?: "small" | "large";
	align?: "center" | "bottom";
}

const Header: React.FC<HeaderProps> = ({
	Image,
	title,
	subTitle,
	size = "large",
	align = "center",
}) => {
	const { setNavOpen, screenSize } = useAppContext();

	return (
		<header
			className={`${
				screenSize < 750
					? size === "large"
						? "h-[90vh]"
						: "h-[40vh]"
					: "h-[90vh]"
			} text-primary`}
		>
			<div
				className={`absolute w-full z-[-2] [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:object-center ${
					screenSize < 750
						? size === "large"
							? "h-full"
							: "h-1/2"
						: "h-[110%]"
				}`}
			>
				<div className="absolute top-0 w-screen h-1/2 opacity-70 bg-gradient-to-b from-gray-900 to-transparent"></div>
				<Image />
			</div>

			{screenSize < 1000 && (
				<Button
					onClick={() => setNavOpen(true)}
					className={`fixed top-6 z-[98] ${
						screenSize < 750 ? "right-4" : "right-10"
					}`}
				>
					<MenuRoundedIcon />
				</Button>
			)}

			{screenSize < 1000 && (
				<Link to="/">
					<img
						className={`absolute top-4 block !h-12 !w-auto ${
							screenSize < 750 ? "left-4" : "left-10"
						}`}
						src={LogoPrimary}
						alt="Logo ReisFeeld White"
					/>
				</Link>
			)}

			<Nav />

			<Title
				title={title}
				subTitle={subTitle}
				align={align}
				size={size}
			/>
		</header>
	);
};

export default Header;
