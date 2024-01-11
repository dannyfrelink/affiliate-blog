import { useParams } from "react-router-dom";
import SideBar from "../../components/pages/blogs/SideBar";
import data from "../../data/blogs.json";
import { BlogsData, Destination } from "./BlogOverview";
import Header from "../../components/header/Header";
import Footer from "../../components/general/Footer";
import BlogContent from "../../components/pages/blogs/BlogContent";
import { useAppContext } from "../../config/AppContext";

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
		<div className="overflow-y-hidden">
			<Header
				Image={() => <img src={coverImage} alt="Viewpoint" />}
				title={blog.title}
				subTitle={blog.date}
				size="small"
				align="bottom"
			/>

			<div className={screenSize >= 1000 ? "flex" : ""}>
				<div>
					{sections.map((section, index) => {
						const text = section.text;

						return (
							<BlogContent
								key={index}
								image={section.image}
								text={text}
								images={images}
							></BlogContent>
						);
					})}
				</div>

				<SideBar />
			</div>

			<Footer />
		</div>
	);
};

export default BlogPost;
