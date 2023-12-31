import React from "react";
import Nav from "./Nav";
import Button from "../general/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useAppContext } from "../../config/AppContext";
import Title from "./Title";

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
						? "h-screen [&>img]:h-full"
						: "h-[50vh] [&>img]:h-1/2"
					: "h-screen [&>img]:h-full"
			} [&>img]:w-full [&>img]:object-cover [&>img]:object-center [&>img]:absolute [&>img]:z-[-2] text-primary`}
		>
			<Image />

			{screenSize < 750 && (
				<Button
					openNav={() => setNavOpen(true)}
					className="absolute top-6 right-4"
				>
					<MenuRoundedIcon />
				</Button>
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
