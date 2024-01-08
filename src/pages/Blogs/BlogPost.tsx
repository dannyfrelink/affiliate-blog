import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../config/AppContext";

const BlogPost = ({}) => {
	const { location, blog } = useParams();

	return (
		<div>
			<div></div>
		</div>
	);
};

export default BlogPost;
