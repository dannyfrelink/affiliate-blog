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
		<div className="[&>*:not(:last-child)]:mb-10">
			{destinations.map((dest, index) => {
				const accoms = accommodations[dest];
				const destId = dest.toLowerCase().split(" ").join("-");

				return (
					<div key={index}>
						<Element className="text-center" name={destId}>
							<BaseText>Leukste accommodaties in</BaseText>
							<H2 className="text-tertair mt-0.5" id={destId}>
								{dest}
							</H2>
						</Element>

						<section className="[&>*:not(:last-child)]:pb-5">
							{accoms.map((accom, index) => {
								const image = require(`../../../images/mockup/${accom.image}`);

								return (
									<div
										className="[&>*:not(:first-child)]:mt-2 pt-5"
										key={index}
									>
										<img
											src={image}
											alt="Accommodatie"
											className="mb-4 rounded-2xl shadow-subtle"
										/>

										<H3>{accom.name}</H3>
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
											className="!mt-3"
											blank
										>
											Meer informatie{" "}
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
