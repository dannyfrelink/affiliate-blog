import { useParams } from "react-router-dom";
import SideBar from "../../components/pages/blogs/SideBar";
import data from "../../data/blogs.json";
import { BlogsData, Destination } from "./BlogOverview";
import Container from "../../components/general/Container";
import H2 from "../../components/typography/H2";
import Header from "../../components/header/Header";
import parseHTMLText from "../../helpers/parseHTMLText";
import replaceImageTag from "../../helpers/replaceImageTag";

const BlogPost = () => {
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
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle={blog.date}
				size="small"
				align="bottom"
			/>

			<div>
				{sections.map((section, index) => {
					const image = require(`../../images/mockup/${section.image}`);
					const textTotal = section.text;
					const textArr = [];

					// textTotal.split()

					const test2 = replaceImageTag(textTotal, images);
					const test = parseHTMLText(test2, images);

					console.log(test);

					return (
						<div className="relative" key={index}>
							<Container>
								<H2>{section.title}</H2>
								{test}
							</Container>
							<div className="h-[60vh] w-full">
								<img
									className="absolute w-full z-[-99] bottom-0"
									src={image}
									alt="Backdrop"
								/>
							</div>
						</div>
					);
				})}
			</div>

			<SideBar />
		</div>
	);
};

export default BlogPost;
