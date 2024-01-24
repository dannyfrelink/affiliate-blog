import React from "react";
import { Element } from "react-scroll";
import { useAppContext } from "../../../config/AppContext";
import BaseText from "../../typography/BaseText";
import H2 from "../../typography/H2";

interface ListOverviewProps {
	title: string;
	dest: string;
	children: React.ReactNode;
}

const ListOverview: React.FC<ListOverviewProps> = ({
	title,
	dest,
	children,
}) => {
	const { screenSize } = useAppContext();
	const destId = dest.toLowerCase().split(" ").join("-");

	return (
		<div>
			<Element
				className={`text-center ${
					screenSize < 900
						? "mt-10"
						: screenSize < 1250
						? "mt-16 pb-8"
						: "mt-20 pb-10"
				}`}
				name={destId}
			>
				<BaseText>{title}</BaseText>
				<H2
					className={`text-tertair ${
						screenSize < 900
							? "mt-0.5"
							: screenSize < 1250
							? "mt-1.5"
							: "mt-2"
					}`}
					id={destId}
				>
					{dest}
				</H2>
			</Element>

			<section
				className={`grid max-w-[1500px] mx-auto ${
					screenSize < 900
						? "justify-center flex-col [&>*:not(:last-child)]:mb-5"
						: `grid-cols-2 ${
								screenSize < 1250 ? "gap-y-14" : "gap-y-20"
						  }`
				}`}
			>
				{children}
			</section>
		</div>
	);
};

export default ListOverview;
