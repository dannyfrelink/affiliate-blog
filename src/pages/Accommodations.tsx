import { useEffect } from "react";
import { useAppContext } from "../config/AppContext";
import Header from "../components/header/Header";
import HeaderImage from "../images/mockup/hotel.png";
import H2 from "../components/typography/H2";
import BaseText from "../components/typography/BaseText";
import Overview from "../components/pages/overview/Overview";
import Footer from "../components/general/Footer";
import data from "../data/accommodations.json";
import H3 from "../components/typography/H3";
import Button from "../components/general/Button";
import { Element } from "react-scroll";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

interface AccommodationsData {
	[destination: string]: {
		image: string;
		name: string;
		description: string;
		prices: {
			high: number;
			low: number;
		};
		link: string;
	}[];
}

const Accommodations = () => {
	const { screenSize } = useAppContext();
	const { setBlogsPageActive } = useAppContext();
	useEffect(() => {
		setBlogsPageActive(false);
	}, []);

	const accommodations: AccommodationsData = data.accommodations;
	const destinations = Object.keys(accommodations);

	return (
		<div>
			<Header
				size="small"
				align="bottom"
				Image={() => <img src={HeaderImage} alt="Hotel Room" />}
				title="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
			/>

			<Overview destinations={destinations}>
				<div className="max-w-[1000px] mx-auto">
					<H2 className={screenSize < 1250 ? "mb-2" : "mb-3"}>
						Lorem ipsum dolor sit amet est explicabo blanditiis
					</H2>
					<div
						className={
							screenSize < 1250
								? "[&>*:not(:last-child)]:mb-3"
								: "[&>*:not(:last-child)]:mb-4"
						}
					>
						<BaseText>
							Lorem ipsum dolor sit amet. Est explicabo blanditiis
							eum perferendis harum eum galisum voluptas quo natus
							nihil aut aspernatur voluptas rem ipsum dolorum aut
							fugiat cumque. Et officiis iure et asperiores totam
							quo sunt alias. Sed illum perferendis quo possimus
							inventore et reiciendis modi. Sed quos voluptate nam
							deleniti veniam ut nihil consequatur.
						</BaseText>
						<div
							className={
								screenSize < 1250
									? "[&>*:not(:last-child)]:mb-3"
									: "[&>*:not(:last-child)]:mb-4"
							}
						>
							<BaseText>
								Et dolorem rerum qui doloremque consectetur aut
								incidunt fugit ad voluptatibus dignissimos aut
								laborum excepturi et dicta dicta quo fuga enim.
								Est ipsum possimus a corporis dolores qui
								placeat dolor aut veritatis eveniet non cumque
								autem sed iure veritatis est suscipit sequi. Est
								asperiores porro non officia incidunt sed autem
								dolor est dolores illo et molestiae quas aut
								error totam.
							</BaseText>
							<BaseText>
								Et optio veniam aut veniam voluptatem et
								explicabo ullam id aperiam cumque aut neque
								laborum ex voluptatem facere. Eum rerum aperiam
								eos fugiat dolor et quis cupiditate sed animi
								enim et ducimus beatae. Et velit magni et fugiat
								voluptas est inventore recusandae eum nihil
								dolorum sed ipsa totam ea praesentium ipsum qui
								temporibus saepe.
							</BaseText>
						</div>
					</div>
				</div>

				<div className="[&>*:not(:last-child)]:mb-10">
					{destinations.map((dest, index) => {
						const accoms = accommodations[dest];
						const destId = dest.toLowerCase().split(" ").join("-");

						return (
							<div key={index}>
								<Element className="text-center" name={destId}>
									<BaseText>
										Leukste accommodaties in
									</BaseText>
									<H2
										className="text-tertair mt-0.5"
										id={destId}
									>
										{dest}
									</H2>
								</Element>

								<section className="[&>*:not(:last-child)]:pb-5">
									{accoms.map((accom, index) => {
										const image = require(`../images/mockup/${accom.image}`);

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
												<BaseText>
													{accom.description}
												</BaseText>

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
			</Overview>

			<Footer />
		</div>
	);
};

export default Accommodations;
