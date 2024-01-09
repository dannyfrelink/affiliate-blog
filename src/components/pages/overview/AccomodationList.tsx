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
							const image = require(`../../../images/mockup/${accom.image}`);

							return (
								<div
									className={
										screenSize < 900
											? "[&>*:not(:first-child)]:mt-2 pt-5 max-w-[550px]"
											: `w-[35vw] ${
													screenSize < 1250
														? "[&>*:not(:first-child)]:mt-2.5"
														: "[&>*:not(:first-child)]:mt-3"
											  }`
									}
									key={index}
								>
									<img
										src={image}
										alt="Accommodatie"
										className="mb-4 w-full max-h-[325px] object-cover object-center rounded-2xl shadow-subtle"
									/>

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

									<div>
										<BaseText className="font-medium">
											Laagseizoen
										</BaseText>
										<BaseText>
											Prijzen vanaf €{accom.prices.low}
										</BaseText>
									</div>

									<div>
										<BaseText className="font-medium">
											Hoogseizoen
										</BaseText>
										<BaseText>
											Prijzen vanaf €{accom.prices.high}
										</BaseText>
									</div>

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
							);
						})}
					</ListOverview>
				);
			})}
		</div>
	);
};

export default AccommodationList;
