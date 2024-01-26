import React from "react";
import H3 from "../../typography/H3";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { AccommodationsData } from "../../../pages/Accommodations";
import BaseText from "../../typography/BaseText";
import { useAppContext } from "../../../config/AppContext";
import ListOverview from "./ListOverview";
import ButtonLink from "../../general/ButtonLink";

interface AccommodationListProps {
	accommodations: AccommodationsData;
	destinations: string[];
}

const AccommodationList: React.FC<AccommodationListProps> = ({
	accommodations,
	destinations,
}) => {
	const { screenSize } = useAppContext();

	return (
		<div className="[&>div:first-child>div]:!mt-0">
			{destinations.map((dest, index) => {
				const accoms = accommodations[dest];

				return (
					<ListOverview
						title="Leukste accommodaties in"
						dest={dest}
						key={index}
					>
						{accoms.map((accom, index) => {
							const image = require(`../../../assets/mockup/${accom.image}`);

							return (
								<section
									className={`flex flex-col items-center ${
										screenSize < 900
											? "pt-5 max-w-[550px]"
											: ""
									}`}
									key={index}
								>
									<img
										src={image}
										alt="Accommodatie"
										className={`mb-4 object-cover object-center rounded-2xl shadow-subtle ${
											screenSize < 900
												? "w-full max-w-[550px] h-[56vw] max-h-[325px]"
												: "w-[36vw] max-w-[650px] h-[24vw] max-h-[375px]"
										}`}
									/>

									<div
										className={
											screenSize < 900
												? "[&>*]:mt-2 max-w-[550px]"
												: `w-[88%] max-w-[650px] ${
														screenSize < 1250
															? "[&>*]:mt-2.5"
															: "[&>*]:mt-3"
												  }`
										}
									>
										<H3
											className={
												screenSize < 900
													? "!mt-3"
													: screenSize < 1250
													? "!mt-4"
													: "!mt-6"
											}
										>
											{accom.name}
										</H3>
										<BaseText>{accom.description}</BaseText>

										<article>
											<BaseText className="font-medium">
												Laagseizoen
											</BaseText>
											<BaseText>
												Prijzen vanaf €
												{accom.prices.low}
											</BaseText>
										</article>

										<article>
											<BaseText className="font-medium">
												Hoogseizoen
											</BaseText>
											<BaseText>
												Prijzen vanaf €
												{accom.prices.high}
											</BaseText>
										</article>

										<ButtonLink
											link={accom.link}
											className={
												screenSize < 900
													? "!mt-3"
													: screenSize < 1250
													? "!mt-4"
													: "!mt-5"
											}
											blank
										>
											Bekijk accommodatie{" "}
											<ArrowForwardRoundedIcon
												fontSize={
													screenSize < 750
														? "small"
														: "medium"
												}
											/>
										</ButtonLink>
									</div>
								</section>
							);
						})}
					</ListOverview>
				);
			})}
		</div>
	);
};

export default AccommodationList;
