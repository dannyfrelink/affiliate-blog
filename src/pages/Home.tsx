import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { useAppContext } from "../config/AppContext";
import HeaderImage from "../images/mockup/viewpoint.png";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const { setBlogsPageActive } = useAppContext();
	useEffect(() => {
		setBlogsPageActive(false);
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

export default Home;
