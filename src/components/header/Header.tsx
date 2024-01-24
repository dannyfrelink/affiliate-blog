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
	imageHeight?: "small" | "large";
	title: string;
	subTitle?: string;
	size?: "small" | "large";
	align?: "center" | "bottom";
	isBlog?: boolean;
}

const Header: React.FC<HeaderProps> = ({
	Image,
	imageHeight = "large",
	title,
	subTitle,
	size = "large",
	align = "center",
	isBlog = false,
}) => {
	const { setNavOpen, screenSize } = useAppContext();

	return (
		<header
			className={`${
				screenSize < 750
					? size === "large"
						? "h-[90dvh]"
						: "h-[40dvh]"
					: "h-[90dvh]"
			} text-primary`}
		>
			<div
				className={`absolute w-full z-[-2] [&>img]:w-full [&>img]:object-cover [&>img]:object-center ${
					imageHeight === "large"
						? "[&>img]:h-full"
						: screenSize < 750
						? size === "large"
							? "[&>img]:h-[calc(90dvh+24px)]"
							: "[&>img]:h-[calc(40dvh+24px)]"
						: "[&>img]:h-[calc(90dvh+24px)]"
				} ${
					screenSize < 750
						? size === "large"
							? "h-full"
							: "h-1/2"
						: "h-[110%]"
				}`}
			>
				<div
					className={`absolute top-0 w-full opacity-70 bg-gradient-to-b from-gray-900 ${
						size === "small" && screenSize < 750
							? `via-transparent to-gray-900 h-full ${
									isBlog ? "via-20%" : "via-40%"
							  }`
							: "to-transparent h-1/2"
					}`}
				></div>
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
				<Link
					className={`absolute top-4 ${
						screenSize < 750 ? "left-4" : "left-10"
					}`}
					to="/"
				>
					<img
						className={`block !h-12 !w-auto`}
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
				isBlog={isBlog}
			/>
		</header>
	);
};

export default Header;
