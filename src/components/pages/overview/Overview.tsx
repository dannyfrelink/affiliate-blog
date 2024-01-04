import React from "react";
import { useAppContext } from "../../../config/AppContext";
import Container from "../../general/Container";
import H2 from "../../typography/H2";
import BaseText from "../../typography/BaseText";

interface OverviewProps {
	children: React.ReactNode[];
}

const Overview: React.FC<OverviewProps> = ({ children }) => {
	console.log(children);

	const { activeOverview } = useAppContext();
	return (
		<main>
			<Container>{children[0]}</Container>

			<Container>{children[1]}</Container>
		</main>
	);
};

export default Overview;
