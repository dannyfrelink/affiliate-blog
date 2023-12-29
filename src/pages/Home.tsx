import HeaderLarge from "../components/header/Header";
import HeaderImage from "../images/mockup/viewpoint.png";

const Home = () => {
	return (
		<div>
			<HeaderLarge
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
			/>
		</div>
	);
};

export default Home;
