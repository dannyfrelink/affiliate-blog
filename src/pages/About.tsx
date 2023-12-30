import React, { useEffect } from "react";
import { useAppContext } from "../config/AppContext";
import Header from "../components/header/Header";
import HeaderImage from "../images/mockup/viewpoint.png";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	const { setActivePage } = useAppContext();
	useEffect(() => {
		setActivePage(false);
	}, []);

	return (
		<div>
			<Header
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
			/>
		</div>
	);
};

export default About;
