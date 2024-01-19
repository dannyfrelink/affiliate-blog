import HeaderImage from "../../assets/mockup/viewpoint.png";
import Header from "../../components/header/Header";
import { useAppContext } from "../../config/AppContext";
import Overview from "../../components/pages/overview/Overview";
import BaseText from "../../components/typography/BaseText";
import IntroOverview from "../../components/pages/overview/IntroOverview";
import data from "../../data/blogs.json";
import ListOverview from "../../components/pages/overview/ListOverview";
import H3 from "../../components/typography/H3";
import { Link } from "react-router-dom";
import Footer from "../../components/general/Footer";

export interface Destination {
	id: number;
	metaDesc: string;
	date: string;
	coverImage: string;
	title: string;
	headers: string[];
	content: {
		[section: string]: {
			text: string;
			image?: string;
		};
	};
	images: {
		src: {
			[image: string]: string;
		};
		alt: {
			[image: string]: string;
		};
	};
	featured?: string;
	carousel?: boolean;
}

export interface BlogsData {
	[destination: string]: Destination[];
}

const BlogOverview = () => {
	const { screenSize } = useAppContext();

	const blogs: BlogsData = data.blogs;
	const destinations = Object.keys(blogs);

	return (
		<div>
			<Header
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Indonesië"
				subTitle={
					"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
				}
			/>

			<Overview destinations={destinations}>
				<IntroOverview title="Reizen naar Indonesië">
					<BaseText>
						Indonesië is echt onze favoriete reisbestemming! Je kunt
						hier alles vinden, van prachtige stranden tot groene
						jungles en van helderblauw water tot een interessante
						cultuur. Ook kan je ervoor kiezen om goedkoop te reizen,
						een mooie middenweg te nemen of uit te pakken met mega
						luxe verblijven. De bevolking is ontzettend gastvrij en
						behulpzaam en voor de Indische keuken kan je ons echt
						wakker maken. In de natuur kan je hier van alles vinden,
						denk aan watervallen, vulkanen, mooie uitzichtpunten en
						niet te vergeten: rijstvelden!
					</BaseText>
				</IntroOverview>
				<div className="[&>div:first-child>div]:!mt-0">
					{destinations.map((dest, index) => {
						const blogsPerDest = blogs[dest];

						return (
							<ListOverview
								title="Blogs over"
								dest={dest}
								key={index}
							>
								{blogsPerDest.map((blog, index) => {
									const image = require(`../../assets/mockup/${blog.coverImage}`);

									return (
										<Link
											to={`/indonesie/${blog.id}`}
											className={`relative ${
												screenSize < 900
													? "[&>*:not(:first-child)]:mt-2 pt-5 max-w-[550px]"
													: `w-[36vw] ${
															screenSize < 1250
																? "[&>*:not(:first-child)]:mt-2.5"
																: "[&>*:not(:first-child)]:mt-3"
													  }`
											}`}
											key={index}
										>
											<img
												src={image}
												alt="Blog Cover"
												className="w-full max-h-[325px] object-cover object-center rounded-2xl shadow-subtle"
											/>

											<H3
												className={`absolute w-[90%] left-[5%] text-primary ${
													screenSize < 900
														? "bottom-9"
														: "bottom-4"
												}`}
											>
												{blog.title}
											</H3>
										</Link>
									);
								})}
							</ListOverview>
						);
					})}
				</div>
			</Overview>

			<Footer />
		</div>
	);
};

export default BlogOverview;
