import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";

const BlogPost = ({}) => {
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
