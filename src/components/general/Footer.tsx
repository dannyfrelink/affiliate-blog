import React from "react";
import BaseText from "../typography/BaseText";
import { useAppContext } from "../../config/AppContext";
import ScrollToTopButton from "../pages/overview/ScrollToTopButton";
import LogoBlack from "../../assets/logo/Logo-ReisFeeld-black.svg";
import Socials from "../pages/blogs/Socials";
import H3 from "../typography/H3";
import { Link } from "react-router-dom";
import ButtonLink from "./ButtonLink";

const Footer: React.FC = () => {
	const { screenSize } = useAppContext();
	return (
		<div>
			<ScrollToTopButton />
			<div
				className={`relative before:bg-background before:absolute before:inset-0 before:-top-6 before:z-[-99] ${
					screenSize < 750
						? "pt-6 pb-4 px-[7.5vw] text-center"
						: screenSize < 1000
						? "pt-7 pb-4 px-[9vw] text-center"
						: screenSize < 1250
						? "pt-9 pb-5 px-[9vw]"
						: "pt-10 pb-5 px-[10vw]"
				}`}
			>
				<div
					className={`flex ${
						screenSize < 1000
							? "flex-col justify-center gap-8"
							: "items-start justify-between gap-16"
					}`}
				>
					<div
						className={
							screenSize < 1000
								? "max-w-[550px] mx-auto"
								: "max-w-[500px]"
						}
					>
						<Link to="/">
							<img
								className={`h-12 mb-6 ${
									screenSize < 1000 && "mx-auto"
								}`}
								src={LogoBlack}
								alt="Logo ReisFeeld"
							/>
						</Link>

						<div
							className={`[&_a]:!w-7 mb-7 ${
								screenSize < 1000
									? "[&_a]:!w-7 [&>*]:justify-center [&>h3]:mb-1.5"
									: "[&_a]:!w-[34px] [&>*]:gap-3.5 [&>h3]:mb-2.5"
							}`}
						>
							<H3>Volg ons op</H3>
							<Socials />
						</div>

						<div>
							<BaseText className="font-medium">
								Lijkt het je leuk om samen te werken? <br />{" "}
								Stuur ons een email!
							</BaseText>
							<Link
								to=""
								onClick={() =>
									(window.location.href =
										"mailto:reisfeeld@gmail.com")
								}
								className="underline"
							>
								<BaseText className="mt-1">
									reisfeeld@gmail.com
								</BaseText>
							</Link>
						</div>
					</div>

					<div
						className={`flex flex-wrap gap-3 [&>a]:h-fit ${
							screenSize < 1000
								? "justify-center"
								: "max-w-[400px]"
						}`}
					>
						<ButtonLink link="/">Home</ButtonLink>
						<ButtonLink link="/indonesie">Indonesië</ButtonLink>
						<ButtonLink link="/accommodaties">
							Accommodaties
						</ButtonLink>
						<ButtonLink link="/over-ons">Over ons</ButtonLink>
					</div>
				</div>

				<BaseText className="mt-8 text-center">
					© 2024 ReisFeeld
				</BaseText>
			</div>
		</div>
	);
};

export default Footer;
