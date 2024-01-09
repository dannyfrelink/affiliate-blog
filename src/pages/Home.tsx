import Header from "../components/header/Header";
import { useAppContext } from "../config/AppContext";
import HeaderImage from "../images/mockup/mountains.png";
import Container from "../components/general/Container";
import Carousel from "../components/pages/home/Carousel";
import CarouselImg1 from "../images/mockup/mountains.png";
import CarouselImg2 from "../images/mockup/couple.png";
import H2 from "../components/typography/H2";
import Featured from "../components/pages/home/Featured";
import FeatureImage from "../images/mockup/dreamy.png";
import AboutImage from "../images/mockup/couple.png";
import BaseText from "../components/typography/BaseText";
import Footer from "../components/general/Footer";

const Home = () => {
	const { screenSize } = useAppContext();

	return (
		<div>
			<Header
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
			/>

			<main className="rounded-3xl">
				<Container className={screenSize > 750 ? "!px-0" : ""}>
					<H2
						className={`text-center ${
							screenSize < 750
								? "mb-5"
								: screenSize < 1250
								? "mb-7"
								: "mb-9"
						}`}
					>
						Lorem ipsum dolor sit
					</H2>
					<Carousel
						items={[
							{
								src: CarouselImg1,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
							{
								src: CarouselImg2,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
							{
								src: CarouselImg1,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
							{
								src: CarouselImg2,
								title: "Lorem ipsum dolor sit amet est explicabo blanditiis",
							},
						]}
					/>
				</Container>

				<Featured
					Image={() => <img src={FeatureImage} alt="Viewpoint" />}
				/>

				<Container>
					<section
						className={`[&>*:not(:last-child)]:mb-5 ${
							screenSize < 750 && "max-w-[500px] mx-auto"
						} ${
							screenSize > 1350 &&
							"flex justify-between flex-row-reverse"
						}`}
					>
						{screenSize < 750 && (
							<H2 className="text-center">Over ons</H2>
						)}
						<img
							className={`h-[85vw] w-[85vw] max-h-[350px] object-cover object-center rounded-2xl shadow-subtle ${
								screenSize < 750
									? "mx-auto"
									: `max-w-[450px] float-right !mb-0 ${
											screenSize < 1250 ? "ml-6" : "ml-10"
									  }`
							}`}
							src={AboutImage}
							alt="Us"
						/>

						<div className="[&>*:not(:last-child)]:mb-5 max-w-[750px]">
							{screenSize > 750 && <H2>Over ons</H2>}
							<BaseText>
								Lorem ipsum dolor sit amet. Est explicabo
								blanditiis eum perferendis harum eum galisum
								voluptas quo natus nihil aut aspernatur voluptas
								rem ipsum dolorum aut fugiat cumque. Et officiis
								iure et asperiores totam quo sunt alias. Sed
								illum perferendis quo possimus inventore et
								reiciendis modi. Sed quos voluptate nam deleniti
								veniam ut nihil consequatur.
							</BaseText>
							<BaseText>
								Et dolorem rerum qui doloremque consectetur aut
								incidunt fugit ad voluptatibus dignissimos aut
								laborum excepturi et dicta dicta quo fuga enim.
								Est ipsum possimus a corporis dolores qui
								placeat dolor aut veritatis eveniet non cumque
								autem sed iure veritatis est suscipit sequi. Est
								asperiores porro non officia incidunt sed autem
								dolor est dolores illo et molestiae quas aut
								error totam.
							</BaseText>
						</div>
					</section>
				</Container>
			</main>

			<Footer />
		</div>
	);
};

export default Home;
