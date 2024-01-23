import React from "react";
import { Link } from "react-scroll";
import H3 from "../../typography/H3";
import { useAppContext } from "../../../config/AppContext";
import Details from "../../general/Details";

interface TableOfContentsProps {
	headers: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headers }) => {
	const { screenSize } = useAppContext();
	return (
		<>
			{screenSize < 1000 ? (
				<Details summary="Inhoud">
					<ul
						className={`px-4 pt-2 pb-6 rounded-2xl [&>a:not(:last-child)]:mb-2 ${
							screenSize < 550 ? "min-w-[250px]" : "min-w-[300px]"
						}`}
					>
						{headers.map((header, index) => (
							<Link
								className="cursor-pointer block hover:!text-primary text-sm"
								to={header.toLowerCase().split(" ").join("-")}
								smooth={true}
								offset={-100}
								duration={500}
								key={index}
							>
								<li>{header}</li>
							</Link>
						))}
					</ul>
				</Details>
			) : (
				<section>
					<H3 className="mb-4" color="black">
						Inhoud
					</H3>

					<ul className="bg-secondary px-5 py-6 text-primary rounded-2xl [&>a:not(:last-child)]:mb-2">
						{headers.map((header, index) => (
							<Link
								className="cursor-pointer block hover:text-primary hover:underline"
								to={header.toLowerCase().split(" ").join("-")}
								smooth={true}
								offset={-100}
								duration={500}
								key={index}
							>
								<li>{header}</li>
							</Link>
						))}
					</ul>
				</section>
			)}
		</>
	);
};

export default TableOfContents;
