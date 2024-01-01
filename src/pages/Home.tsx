import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { useAppContext } from "../config/AppContext";
import HeaderImage from "../images/mockup/viewpoint.png";
import Container from "../components/general/Container";
import H2 from "../components/typography/H2";

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

			<main className="bg-background rounded-t-3xl">
				<Container>
					<div>
						<H2>Lorem ipsum dolor sit</H2>
						<p>
							Lorem ipsum dolor sit amet. Est explicabo blanditiis
							eum perferendis harum eum galisum voluptas quo natus
							nihil aut aspernatur voluptas rem ipsum dolorum aut
							fugiat cumque. Et officiis iure et asperiores totam
							quo sunt alias. Sed illum perferendis quo possimus
							inventore et reiciendis modi. Sed quos voluptate n
						</p>
					</div>
				</Container>
			</main>
		</div>
	);
};

export default Home;
