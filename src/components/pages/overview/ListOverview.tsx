import React from "react";
import { Element } from "react-scroll";
import { useAppContext } from "../../../config/AppContext";
import BaseText from "../../typography/BaseText";
import H2 from "../../typography/H2";

interface ListOverviewProps {
	title: string;
	dest: string;
	index: number;
	children: React.ReactNode;
}

const ListOverview: React.FC<ListOverviewProps> = ({
	title,
	dest,
	index,
	children,
}) => {
	const { screenSize } = useAppContext();
	const destId = dest.toLowerCase().split(" ").join("-");

	return (
		<div key={index}>
			<Element
				className={`text-center ${
					screenSize < 900
						? "pt-10"
						: screenSize < 1250
						? "pt-16 pb-8"
						: "pt-20 pb-10"
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

			{children}
		</div>
	);
};

export default ListOverview;
