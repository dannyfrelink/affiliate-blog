import React from "react";
import H3 from "../../typography/H3";
import Button from "../../general/Button";
import { Element } from "react-scroll";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { AccommodationsData } from "../../../pages/Accommodations";
import BaseText from "../../typography/BaseText";
import H2 from "../../typography/H2";
import { useAppContext } from "../../../config/AppContext";

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
		<div className="[&>div:first-child>div]:!pt-0">
			{destinations.map((dest, index) => {
				const accoms = accommodations[dest];
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
							<BaseText>Leukste accommodaties in</BaseText>
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
							className={`flex  ${
								screenSize < 900
									? "items-center flex-col [&>*:not(:last-child)]:pb-5"
									: `justify-between flex-wrap ${
											screenSize < 1250
												? "gap-y-14"
												: "gap-y-20"
									  }`
							}`}
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
												Prijzen vanaf €
												{accom.prices.low}
											</BaseText>
										</div>

										<div>
											<BaseText className="font-medium">
												Hoogseizoen
											</BaseText>
											<BaseText>
												Prijzen vanaf €
												{accom.prices.high}
											</BaseText>
										</div>

										<Button
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
										</Button>
									</div>
								);
							})}
						</section>
					</div>
				);
			})}
		</div>
	);
};

export default AccommodationList;
