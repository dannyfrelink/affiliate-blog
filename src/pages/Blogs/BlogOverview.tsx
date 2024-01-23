import HeaderImage from "../../assets/header/blogs.jpg";
import Header from "../../components/header/Header";
import { useAppContext } from "../../config/AppContext";
import Overview from "../../components/pages/overview/Overview";
import BaseText from "../../components/typography/BaseText";
import data from "../../data/blogs.json";
import ListOverview from "../../components/pages/overview/ListOverview";
import H3 from "../../components/typography/H3";
import { Link } from "react-router-dom";
import Footer from "../../components/general/Footer";
import H2 from "../../components/typography/H2";
import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import CountryTag from "../../components/pages/blogs/CountryTag";

export interface Destination {
	id: number;
	metaDesc: string;
	date: string;
	href: string;
	coverImage: {
		src: string;
		alt: string;
	};
	title: string;
	headers: string[];
	content: {
		[section: string]:
			| {
					text: string;
					image?: {
						src: string;
						alt: string;
					};
			  }
			| undefined;
	};
	images: {
		src: {
			[image: string]: string | undefined;
		};
		alt: {
			[image: string]: string | undefined;
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

	const tags = [
		{
			icon: <ThermostatRoundedIcon />,
			title: "Beste reistijd",
			value: "April - Oktober",
		},
		{
			icon: <AttachMoneyRoundedIcon />,
			title: "Valuta",
			value: "Indonesische Rupiah",
		},
		{
			icon: <AccessTimeFilledRoundedIcon />,
			title: "Tijdsverschil",
			value: "6/7 uur",
		},
		{
			icon: <FlightRoundedIcon />,
			title: "Vliegtijd",
			value: "16 uur",
		},
	];

	return (
		<div>
			<Header
				Image={() => (
					<img src={HeaderImage} alt="Rijstvelden Indonesië" />
				)}
				title="Indonesië"
				subTitle={
					"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
				}
			/>

			<Overview destinations={destinations}>
				<section className="max-w-[1000px] mx-auto">
					<div
						className={`${
							screenSize < 1000
								? "grid grid-cols-2 gap-x-2 gap-y-6 text-center max-w-[650px] mx-auto mb-7"
								: `flex ${
										screenSize < 1250 ? "mb-10" : "mb-14"
								  }`
						}`}
					>
						{tags.map((tag, index) => {
							return (
								<CountryTag
									title={tag.title}
									value={tag.value}
									icon={tag.icon}
								/>
							);
						})}
					</div>

					<H2 className={screenSize < 1250 ? "mb-2" : "mb-3"}>
						Reizen naar Indonesië
					</H2>
					<article
						className={
							screenSize < 1250
								? "[&>*:not(:last-child)]:mb-3"
								: "[&>*:not(:last-child)]:mb-4"
						}
					>
						<BaseText>
							Indonesië is echt onze favoriete reisbestemming! Je
							kunt hier alles vinden, van prachtige stranden tot
							groene jungles en van helderblauw water tot een
							interessante cultuur. Ook kan je ervoor kiezen om
							goedkoop te reizen, een mooie middenweg te nemen of
							uit te pakken met mega luxe verblijven. De bevolking
							is ontzettend gastvrij en behulpzaam en voor de
							Indische keuken kan je ons echt wakker maken. In de
							natuur kan je hier van alles vinden, denk aan
							watervallen, vulkanen, mooie uitzichtpunten en niet
							te vergeten: rijstvelden!
						</BaseText>
					</article>
				</section>

				<section className="[&>div:first-child>div]:!mt-0">
					{destinations.map((dest, index) => {
						const blogsPerDest = blogs[dest];

						return (
							<ListOverview
								title="Blogs over"
								dest={dest}
								key={index}
							>
								{blogsPerDest.map((blog, index) => {
									const image = require(`../../assets/pages/blogposts/${blog.coverImage.src}`);

									return (
										<Link
											to={`/indonesie/${blog.href}`}
											className={`relative ${
												screenSize < 900
													? "w-full [&>*:not(:nth-child[1])]:mt-2 mt-5 max-w-[550px]"
													: `w-[36vw] ${
															screenSize < 1250
																? "[&>*:not(:nth-child[1])]:mt-2.5"
																: "[&>*:not(:nth-child[1])]:mt-3"
													  }`
											}`}
											key={index}
										>
											<div className="absolute bottom-0 w-full rounded-2xl h-full opacity-60 bg-gradient-to-t from-gray-700 via-transparent via-80% to-gray-400"></div>

											<img
												src={image}
												alt={blog.coverImage.alt}
												className="w-full max-h-[325px] object-cover object-center rounded-2xl shadow-subtle"
											/>

											<H3 className="absolute w-[90%] left-[5%] text-primary bottom-4">
												{blog.title}
											</H3>
										</Link>
									);
								})}
							</ListOverview>
						);
					})}
				</section>
			</Overview>

			<Footer />
		</div>
	);
};

export default BlogOverview;
