import React from "react";
import H2 from "../../typography/H2";
import { useAppContext } from "../../../config/AppContext";

interface IntroOverviewProps {
	title: string;
	children: React.ReactNode;
}

const IntroOverview: React.FC<IntroOverviewProps> = ({ title, children }) => {
	const { screenSize } = useAppContext();
	return (
		<section className="max-w-[1000px] mx-auto text-center">
			<H2 className={screenSize < 1250 ? "mb-2" : "mb-3"}>{title}</H2>
			<article
				className={
					screenSize < 1250
						? "[&>*:not(:last-child)]:mb-3"
						: "[&>*:not(:last-child)]:mb-4"
				}
			>
				{children}
			</article>
		</section>
	);
};

export default IntroOverview;
