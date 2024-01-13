import React from "react";
import Nav from "./Nav";
import Button from "../general/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useAppContext } from "../../config/AppContext";
import Title from "./Title";
import LogoBlack from "../../images/logo/Logo-ReisFeeld-black.svg";
import LogoPrimary from "../../images/logo/Logo-ReisFeeld-primary.svg";

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
	const { navOpen, setNavOpen, screenSize, scrolled, scrolledUp } =
		useAppContext();

	return (
		<header
			className={`${
				screenSize < 750
					? size === "large"
						? "h-[90vh] [&>img]:h-full"
						: "h-[40vh] [&>img]:h-1/2"
					: "h-[90vh] [&>img]:h-full"
			} [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>img]:absolute [&>img]:z-[-2] text-primary`}
		>
			<Image />

			{screenSize < 1000 && (
				<Button
					onClick={() => setNavOpen(true)}
					className="fixed top-6 right-4 z-[98]"
				>
					<MenuRoundedIcon />
				</Button>
			)}

			{screenSize < 1000 && (
				<img
					className="absolute top-4 left-4 block !h-12 !w-auto"
					src={LogoPrimary}
					alt="Logo ReisFeeld White"
				/>
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
