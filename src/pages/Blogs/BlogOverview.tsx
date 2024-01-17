import HeaderImage from "../../images/mockup/viewpoint.png";
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
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle={
					"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
				}
			/>

			<Overview destinations={destinations}>
				<IntroOverview title="Lorem ipsum dolor sit amet est explicabo blanditiis">
					<BaseText>
						Lorem ipsum dolor sit amet. Est explicabo blanditiis eum
						perferendis harum eum galisum voluptas quo natus nihil
						aut aspernatur voluptas rem ipsum dolorum aut fugiat
						cumque. Et officiis iure et asperiores totam quo sunt
						alias. Sed illum perferendis quo possimus inventore et
						reiciendis modi. Sed quos voluptate nam deleniti veniam
						ut nihil consequatur.
					</BaseText>
					<BaseText>
						Et dolorem rerum qui doloremque consectetur aut incidunt
						fugit ad voluptatibus dignissimos aut laborum excepturi
						et dicta dicta quo fuga enim. Est ipsum possimus a
						corporis dolores qui placeat dolor aut veritatis eveniet
						non cumque autem sed iure veritatis est suscipit sequi.
						Est asperiores porro non officia incidunt sed autem
						dolor est dolores illo et molestiae quas aut error
						totam.
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
									const image = require(`../../images/mockup/${blog.coverImage}`);

									return (
										<Link
											to={`/blogs/${blog.id}`}
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
