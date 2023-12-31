import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";

interface BlogPostProps {}

const BlogPost: React.FC<BlogPostProps> = ({}) => {
	const { location, blog } = useParams();
	const { setBlogsPageActive } = useAppContext();
	useEffect(() => {
		setBlogsPageActive(true);
	}, []);

	return (
		<div>
			<div></div>
		</div>
	);
};

export default BlogPost;
