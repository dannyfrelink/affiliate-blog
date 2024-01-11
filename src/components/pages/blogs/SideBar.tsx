import React from "react";
import Container from "../../general/Container";
import { useAppContext } from "../../../config/AppContext";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
	const { screenSize } = useAppContext();
	return (
		<Container
			className={`${
				screenSize < 750
					? ""
					: screenSize < 1000
					? ""
					: "w-[50vw] max-w-[450px]"
			}`}
		>
			<div></div>
		</Container>
	);
};

export default SideBar;
