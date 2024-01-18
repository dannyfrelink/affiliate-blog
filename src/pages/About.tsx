import Container from "../components/general/Container";
import Header from "../components/header/Header";
import BaseText from "../components/typography/BaseText";
import H2 from "../components/typography/H2";
import HeaderImage from "../assets/mockup/viewpoint.png";
import AboutImage from "../assets/mockup/couple.png";
import Footer from "../components/general/Footer";
import { useAppContext } from "../config/AppContext";

const About = () => {
	const { screenSize } = useAppContext();

	return (
		<div>
			<Header
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
			/>

			<Container>
				<div
					className={`${
						screenSize < 750
							? "[&>*:not(:last-child)]:mb-5"
							: screenSize < 1250
							? "[&>*:not(:last-child)]:mb-8"
							: "flex justify-center"
					}`}
				>
					<div
						className={`max-w-[750px] mx-auto ${
							screenSize < 750
								? "[&>p:not(:last-of-type)]:mb-3"
								: screenSize < 1250
								? "[&>p:not(:last-of-type)]:mb-3.5"
								: "[&>p:not(:last-of-type)]:mb-4"
						}`}
					>
						<H2
							className={
								screenSize < 750
									? "mb-2"
									: screenSize < 1250
									? "mb-2.5"
									: "mb-3"
							}
						>
							Lorem ipsum dolor sit amet est explicabo blanditiis
						</H2>
						<BaseText className="">
							Et dolorem rerum qui doloremque consectetur aut
							incidunt fugit ad voluptatibus dignissimos aut
							laborum excepturi et dicta dicta quo fuga enim. Est
							ipsum possimus a corporis dolores qui placeat dolor
							aut veritatis eveniet non cumque autem sed iure
							veritatis est suscipit sequi. Est asperiores porro
							non officia incidunt sed autem dolor est dolores
							illo et molestiae quas aut error totam.
						</BaseText>
						<BaseText>
							Et optio veniam aut veniam voluptatem et explicabo
							ullam id aperiam cumque aut neque laborum ex
							voluptatem facere. Eum rerum aperiam eos fugiat
							dolor et quis cupiditate sed animi enim et ducimus
							beatae. Et velit magni et fugiat voluptas est
							inventore recusandae eum nihil dolorum sed ipsa
							totam ea praesentium ipsum qui temporibus saepe.
						</BaseText>

						{screenSize >= 1250 && (
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
						)}
					</div>

					<img
						className={`w-full max-w-[500px] object-cover object-center mx-auto rounded-2xl ${
							screenSize >= 1250 &&
							`mr-0 my-auto h-[500px] max-h-[500px] ${
								screenSize < 1400 ? "ml-16" : "ml-16"
							} `
						}`}
						src={AboutImage}
						alt="Us"
					/>

					{screenSize < 1250 && (
						<BaseText className="max-w-[750px] mx-auto">
							Et dolorem rerum qui doloremque consectetur aut
							incidunt fugit ad voluptatibus dignissimos aut
							laborum excepturi et dicta dicta quo fuga enim. Est
							ipsum possimus a corporis dolores qui placeat dolor
							aut veritatis eveniet non cumque autem sed iure
							veritatis est suscipit sequi. Est asperiores porro
							non officia incidunt sed autem dolor est dolores
							illo et molestiae quas aut error totam.
						</BaseText>
					)}
				</div>
			</Container>

			<Footer />
		</div>
	);
};

export default About;
