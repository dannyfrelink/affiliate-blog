import React from "react";
import { useAppContext } from "../../../config/AppContext";
import H2 from "../../typography/H2";
import BaseText from "../../typography/BaseText";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Destination } from "../../../pages/Blogs/BlogOverview";
import ButtonLink from "../../general/ButtonLink";

interface FeaturedProps {
	blog: Destination;
}

const Featured: React.FC<FeaturedProps> = ({ blog }) => {
	const { screenSize } = useAppContext();
	const image = require(`../../../assets/pages/blogposts/${blog.coverImage.src}`);

	return (
		<div className="flex items-center relative w-full h-[calc(95dvh-(24px*2))]">
			<img
				className="w-full h-[95dvh] absolute -top-6 z-[-2] object-cover object-[50%_65%]"
				src={image}
				alt={blog.coverImage.alt}
			/>

			<section
				className={`text-primary w-[85vw] max-w-[650px] before:absolute before:bottom-0 before:-left-0 before:w-full before:h-full before:opacity-60  before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent before:z-[-1] ${
					screenSize < 750
						? "[&>*:not(:last-child)]:mb-4 mx-auto"
						: screenSize < 1250
						? "[&>*:not(:last-child)]:mb-5 ml-[9vw]"
						: "[&>*:not(:last-child)]:mb-6 ml-[10vw]"
				}`}
			>
				<div>
					<BaseText className="italic mb-1">Uitgelicht</BaseText>
					<H2>{blog.title}</H2>
				</div>
				<BaseText>{blog.featured}</BaseText>

				<ButtonLink link={`/indonesie/${blog.href}`}>
					Ontdek ervaring{" "}
					<ArrowForwardRoundedIcon
						fontSize={screenSize < 750 ? "small" : "medium"}
					/>
				</ButtonLink>
			</section>
		</div>
	);
};

export default Featured;
