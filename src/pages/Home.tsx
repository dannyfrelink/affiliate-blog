import Header from "../components/header/Header";
import { useAppContext } from "../config/AppContext";
import HeaderImage from "../assets/header/home.webp";
import Container from "../components/general/Container";
import Carousel from "../components/pages/home/Carousel";
import H2 from "../components/typography/H2";
import Featured from "../components/pages/home/Featured";
import AboutImage from "../assets/pages/about/couple.jpg";
import BaseText from "../components/typography/BaseText";
import Footer from "../components/general/Footer";
import blogData from "../data/blogs.json";
import { Destination } from "./Blogs/BlogOverview";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import ButtonLink from "../components/general/ButtonLink";
import ScrollBar from "../components/general/ScrollBar";
import React from "react";

const Home: React.FC = React.memo(() => {
	const { screenSize } = useAppContext();
	const blogs: Destination[] = [];
	Object.values(blogData.blogs).map((blogArr) =>
		blogArr.map((blog) => blogs.push(blog))
	);
	const carouselBlogs = blogs.filter((blog) => blog.carousel);
	const featuredBlog = blogs.filter((blog) => blog.featured)[0];
	const [headerImage, setHeaderImage] = useState<string>();

	useEffect(() => {
		headerImage !== "" && setHeaderImage(HeaderImage);
	}, [headerImage]);

	return (
		<ScrollBar>
			<div>
				<Helmet prioritizeSeoTags>
					<title>Test</title>
					<meta name="description" content="Testing this page" />
				</Helmet>

				<Header
					Image={() => <img src={headerImage} alt="Bromo Vulkaan" />}
					title="Jouw Avontuur Ons Verhaal"
					subTitle="Beleef de reis van jouw dromen met al onze tips en tricks"
				/>

				<main className="rounded-3xl">
					<Container className={screenSize > 750 ? "!px-0" : ""}>
						<div className="max-w-[1800px] mx-auto">
							<H2
								className={`text-center ${
									screenSize < 750
										? "mb-5"
										: screenSize < 1250
										? "mb-7"
										: "mb-7"
								}`}
							>
								De nieuwste blogs
							</H2>
							<Carousel items={carouselBlogs} />
						</div>
					</Container>

					<Featured blog={featuredBlog} />

					<Container>
						<section
							className={`[&>*:not(:last-child)]:mb-5 ${
								screenSize < 850 && "max-w-[500px] mx-auto"
							} ${
								screenSize > 1350 &&
								"flex justify-between flex-row-reverse max-w-[1400px] mx-auto"
							}`}
						>
							{screenSize < 850 && (
								<H2 className="text-center">
									Hi, wij zijn Danny & Lisa!
								</H2>
							)}
							<img
								className={`h-[85vw] w-[85vw] object-cover object-[50%_75%] rounded-2xl shadow-subtle ${
									screenSize < 850
										? "max-h-[300px] mx-auto"
										: `max-w-[475px] float-right !mb-0 ml-10 ${
												screenSize < 1250
													? "max-h-[280px]"
													: "max-h-[320px]"
										  }`
								}`}
								src={AboutImage}
								alt="Us"
							/>

							<article
								className={`[&>*:not(:last-child)]:mb-5 max-w-[600px] ${
									screenSize < 850 &&
									"flex flex-col items-center text-center"
								}`}
							>
								{screenSize >= 850 && (
									<H2>Hi, wij zijn Danny & Lisa!</H2>
								)}
								<BaseText>
									In 2018 zijn wij voor het eerst voor acht
									maanden samen op reis geweest en hebben wij
									ontdekt dat dit is wat wij het liefste doen.
									Vele reizen verder hebben wij besloten al
									onze reizen, tips, accommodaties en veel
									meer gaan delen op Reisfeeld.nl. Met onze
									tips en ervaringen hopen wij jouw
									voorbereidingen én reis een stukje leuker te
									maken! We zijn nog lang niet klaar met
									reizen, dus houd ook onze socials in de
									gaten voor leuke reiscontent!
								</BaseText>

								<ButtonLink link="/over-ons">
									Leer ons beter kennen
								</ButtonLink>
							</article>
						</section>
					</Container>
				</main>

				<Footer />
			</div>
		</ScrollBar>
	);
});

export default Home;
