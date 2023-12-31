import React, { useEffect } from "react";
import HeaderImage from "../../images/mockup/viewpoint.png";
import Header from "../../components/header/Header";
import { useAppContext } from "../../config/AppContext";
import { useParams } from "react-router-dom";

interface BlogLocationProps {}

const BlogLocation: React.FC<BlogLocationProps> = ({}) => {
	const { location } = useParams();
	const { setBlogsPageActive } = useAppContext();
	useEffect(() => {
		setBlogsPageActive(true);
	}, []);

	return (
		<div>
			<Header
				Image={() => <img src={HeaderImage} alt="Viewpoint" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
				subTitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
			/>
		</div>
	);
};

export default BlogLocation;
