import React from "react";
import HeaderImage from "../../images/mockup/viewpoint.png";
import Header from "../../components/header/Header";

interface BlogOverviewProps {}

const BlogOverview: React.FC<BlogOverviewProps> = ({}) => {
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

export default BlogOverview;
