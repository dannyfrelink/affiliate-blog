import { useEffect } from "react";
import Header from "../components/header/Header";
import { useAppContext } from "../config/AppContext";
import HeaderImage from "../images/mockup/viewpoint.png";
import Container from "../components/general/Container";
import Carousel from "../components/home/Carousel";
import CarouselImg1 from "../images/mockup/mountains.png";
import CarouselImg2 from "../images/mockup/couple.png";

const Home = () => {
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

			<main className="bg-background rounded-t-3xl">
				<Container>
					<Carousel
						items={[
							CarouselImg1,
							CarouselImg2,
							CarouselImg1,
							CarouselImg2,
						]}
					/>
				</Container>
			</main>
		</div>
	);
};

export default Home;
