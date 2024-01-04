import React from "react";
import Container from "../../general/Container";
import H2 from "../../typography/H2";
import Button from "../../general/Button";
// import { Link } from "react-router-dom";
import { Link, Element } from "react-scroll";

interface OverviewProps {
	children: React.ReactNode[];
}

const Overview: React.FC<OverviewProps> = ({ children }) => {
	const destinations = [
		"Canggu (Bali)",
		"Ubud (Bali)",
		"Uluwatu (Bali)",
		"Lovina (Bali)",
		"Amed (Bali)",
		"Sideman (Bali)",
		"Kuta (Lombok)",
		"Nusa Lembongan",
		"Nusa Penida",
		"Gili Meno",
		"Gili Air",
		"Gili Trawangan",
	];

	return (
		<main>
			<Container>{children[0]}</Container>

			<section className="relative text-center pt-5 pb-7 before:absolute before:inset-x-0 before:-inset-y-6 before:bg-background before:z-[-1]">
				<H2>Bestemmingen</H2>

				<div className="flex flex-wrap justify-center gap-3 w-[85vw] mx-auto mt-4">
					{destinations.map((dest, index) => (
						<Button key={index} className="!bg-tertair">
							<Link
								to={dest.toLowerCase().split(" ").join("-")}
								smooth={true}
								duration={500}
							/>
							{dest}
						</Button>
					))}
				</div>
			</section>

			<Container className="flex items-center h-[200vh]">
				<div></div>
			</Container>
			<Element name={destinations[0].toLowerCase().split(" ").join("-")}>
				<H2 id="canggu-(bali)">Canggu (Bali)</H2>
			</Element>
		</main>
	);
};

export default Overview;
