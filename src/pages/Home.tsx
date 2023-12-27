import React from "react";
import HeaderLarge from "../components/header/HeaderLarge";
import HeaderImage from "../images/mockup/dreamy.png";

function Home() {
	return (
		<div>
			<HeaderLarge
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
			/>

			{/* <HeaderLarge
				align="bottom"
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="28 augustus, 2023"
			/> */}
		</div>
	);
}

export default Home;
