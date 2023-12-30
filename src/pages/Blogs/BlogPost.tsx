import React from "react";
import { useParams } from "react-router-dom";

interface BlogPostProps {}

const BlogPost: React.FC<BlogPostProps> = ({}) => {
	const { location, blog } = useParams();
	console.log(location, blog);
	return (
		<div>
			<div></div>
		</div>
	);
};

export default BlogPost;
