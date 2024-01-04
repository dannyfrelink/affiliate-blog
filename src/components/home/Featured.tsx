import React from "react";
import { useAppContext } from "../../config/AppContext";
import H2 from "../typography/H2";
import BaseText from "../typography/BaseText";
import Button from "../general/Button";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

interface FeaturedProps {
	Image: React.FC<JSX.IntrinsicElements["img"]>;
}

const Featured: React.FC<FeaturedProps> = ({ Image }) => {
	const { screenSize } = useAppContext();
	return (
		<div className="flex items-center relative h-[calc(95vh-(24px*2))] [&>img]:w-full [&>img]:h-[95vh] [&>img]:object-cover [&>img]:object-[50%_65%] [&>img]:absolute [&>img]:-top-6 [&>img]:z-[-1]">
			<Image />

			<section
				className={`text-primary ${
					screenSize < 750 ? "w-[85vw] mx-auto" : ""
				}`}
			>
				<BaseText className="italic">Uitgelicht</BaseText>
				<H2>Lorem ipsum dolor sit amet est explicabo blanditiis</H2>
				<BaseText>
					Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
					ipsum dolor sit amet lorem ipsum dolor sit amet
				</BaseText>

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
