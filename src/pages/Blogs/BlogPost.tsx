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
		<div>
			<Header
				Image={() => <img src={coverImage} alt="Viewpoint" />}
				title={blog.title}
				subTitle={blog.date}
				size="small"
				align="bottom"
			/>
			{/*  */}
			<div className={screenSize >= 1000 ? "relative flex" : ""}>
				<div
					className={`z-[1] ${
						screenSize > 1000 &&
						"[&>*>section]:rounded-none [&>*:first-child>section]:rounded-tl-2xl [&>*:last-child>section]:rounded-bl-2xl"
					}`}
				>
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

				<SideBar blogs={allBlogs} id={Number(id)} />
			</div>

			<Footer />
		</div>
	);
};

export default BlogPost;
