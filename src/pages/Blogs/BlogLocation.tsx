import React from "react";
import HeaderImage from "../../images/mockup/viewpoint.png";
import Header from "../../components/header/Header";

interface BlogLocationProps {}

const BlogLocation: React.FC<BlogLocationProps> = ({}) => {
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
