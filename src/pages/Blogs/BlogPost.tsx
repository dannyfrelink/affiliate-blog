import { useParams } from "react-router-dom";
import SideBar from "../../components/pages/blogs/SideBar";
import data from "../../data/blogs.json";
import { BlogsData, Destination } from "./BlogOverview";
import Header from "../../components/header/Header";
import Footer from "../../components/general/Footer";
import BlogContent from "../../components/pages/blogs/BlogContent";
import { useAppContext } from "../../config/AppContext";
import BottomBar from "../../components/pages/blogs/BottomBar";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
	const { screenSize } = useAppContext();
	const { id } = useParams();
	const blogs: BlogsData = data.blogs;
	const allBlogs: Destination[] = [];
	Object.values(blogs).map((blog) => blog.map((b) => allBlogs.push(b)));
	const blog = allBlogs.filter((b) => b.id === Number(id))[0];
	const coverImage = require(`../../assets/mockup/${blog.coverImage}`);
	const images = blog.images;
	const sections = Object.values(blog.content);

	return (
		<div>
			<Helmet>
				<title>{blog.title}</title>
				<meta name="description" content={blog.metaDesc} />
			</Helmet>

			<Header
				Image={() => <img src={coverImage} alt="Viewpoint" />}
				title="Over ReisFeeld"
				subTitle={blog.date}
				size="small"
				align="bottom"
			/>

			<main className={screenSize < 1000 ? "" : "relative flex"}>
				<article
					className={`z-[1] ${
						screenSize < 1000
							? "[&>*:last-child>section]:!rounded-b-none"
							: `[&>*>section]:rounded-none [&>*:first-child>section]:rounded-tl-2xl ${
									screenSize < 1250
										? "w-4/6"
										: screenSize < 1500
										? "w-[70%]"
										: "w-3/4"
							  }`
					}`}
				>
					{sections.map((section, index) => {
						const text = section.text;

						return (
							<BlogContent
								key={index}
								index={index}
								image={section.image}
								text={text}
								images={images}
								blog={blog}
							></BlogContent>
						);
					})}
				</article>

				{screenSize >= 1000 && (
					<SideBar blogs={allBlogs} id={Number(id)} />
				)}
			</main>

			<BottomBar blogs={allBlogs} id={Number(id)} />

			<Footer />
		</div>
	);
};

export default BlogPost;
