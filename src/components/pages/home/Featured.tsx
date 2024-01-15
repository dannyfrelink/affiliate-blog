import React from "react";
import { useAppContext } from "../../../config/AppContext";
import H2 from "../../typography/H2";
import BaseText from "../../typography/BaseText";
import Button from "../../general/Button";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Destination } from "../../../pages/Blogs/BlogOverview";

interface FeaturedProps {
	blog: Destination;
}

const Featured: React.FC<FeaturedProps> = ({ blog }) => {
	const { screenSize } = useAppContext();
	const image = require(`../../../images/mockup/${blog.coverImage}`);
	return (
		<div className="flex items-center relative h-[calc(95vh-(24px*2))] [&>img]:w-full [&>img]:h-[95vh] [&>img]:object-cover [&>img]:object-[50%_65%] [&>img]:absolute [&>img]:-top-6 [&>img]:z-[-1]">
			<img src={image} alt="Blog Cover" />

			<section
				className={`text-primary w-[85vw] max-w-[650px] ${
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

				<Button>
					Ontdek ervaring{" "}
					<ArrowForwardRoundedIcon
						fontSize={screenSize < 750 ? "small" : "medium"}
					/>
				</Button>
			</section>
		</div>
	);
};

export default Featured;
