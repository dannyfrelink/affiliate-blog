import { useParams } from "react-router-dom";
import SideBar from "../../components/pages/blogs/SideBar";
import data from "../../data/blogs.json";
import { BlogsData, Destination } from "./BlogOverview";
import Container from "../../components/general/Container";
import H2 from "../../components/typography/H2";
import Header from "../../components/header/Header";
import parseHTMLText from "../../helpers/parseHTMLText";
import replaceImageTag from "../../helpers/replaceImageTag";
import { useAppContext } from "../../config/AppContext";
import Footer from "../../components/general/Footer";

const BlogPost = () => {
	const { screenSize } = useAppContext();
	const { id } = useParams();
	const blogs: BlogsData = data.blogs;
	const allBlogs: Destination[] = [];
	Object.values(blogs).map((blog) => blog.map((b) => allBlogs.push(b)));
	const blog = allBlogs.filter((b) => b.id === Number(id))[0];
	const coverImage = require(`../../images/mockup/${blog.coverImage}`);
	const images = blog.images;
	const sections = Object.values(blog.content);

	return (
		<div>
			<Header
				Image={() => <img src={coverImage} alt="Viewpoint" />}
				title={blog.title}
				subTitle={blog.date}
				size="small"
				align="bottom"
			/>

			<div>
				{sections.map((section, index) => {
					const image =
						section.image &&
						require(`../../images/mockup/${section.image}`);
					const textTotal = section.text;
					const parsedImg = replaceImageTag(textTotal, images);
					const parsedText = parseHTMLText(parsedImg, images);

					return (
						<div className="relative" key={index}>
							<Container>
								<div
									className={`[&>img]:w-full [&_img]:rounded-2xl [&_img]:shadow-subtle [&>h3]:font-medium ${
										screenSize < 750
											? "[&>*:not(:last-child)]:mb-3 [&>h2:not(:first-child)]:mt-6 [&>h2]:!mb-2 [&>h3]:!mb-2 [&>img:not(:last-child)]:mb-4 [&>img]:mt-4"
											: screenSize < 1250
											? "[&>*:not(:last-child)]:mb-3.5 [&>h2:not(:first-child)]:mt-7 [&>h2]:!mb-2.5 [&>h3]:!mb-2.5 [&>img:not(:last-child)]:mb-6 [&>img]:mt-6"
											: "[&>*:not(:last-child)]:mb-4 [&>h2:not(:first-child)]:mt-8 [&>h2]:!mb-3 [&>h3]:!mb-3 [&>img:not(:last-child)]:mb-8 [&>img]:mt-8"
									}`}
								>
									{parsedText}
								</div>
							</Container>
							{image && (
								<div
									className={`w-full ${
										screenSize < 550
											? "h-[60vh]"
											: screenSize < 750
											? "h-[75vh]"
											: screenSize < 1250
											? "h-[85vh]"
											: "h-[85vh]"
									}`}
								>
									<img
										className={`absolute w-full z-[-99] ${
											screenSize < 550
												? "-bottom-32"
												: screenSize < 750
												? "-bottom-48"
												: screenSize < 1250
												? "-bottom-[16%]"
												: "-bottom-[28%]"
										}`}
										src={image}
										alt="Backdrop"
									/>
								</div>
							)}
						</div>
					);
				})}
			</div>

			<SideBar />

			<Footer />
		</div>
	);
};

export default BlogPost;
