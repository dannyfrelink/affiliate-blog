import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";

interface BlogPostProps {}

const BlogPost: React.FC<BlogPostProps> = ({}) => {
	const { location, blog } = useParams();
	const { setActivePage } = useAppContext();
	useEffect(() => {
		setActivePage(true);
	}, []);

	return (
		<div>
			<div></div>
		</div>
	);
};

export default BlogPost;
