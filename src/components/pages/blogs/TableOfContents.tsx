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
		<div>
			{screenSize < 1000 ? (
				<Details summary="Inhoud">
					<ul className=" px-4 pt-2 pb-6 rounded-2xl [&>a:not(:last-child)]:mb-2">
						{headers.map((header, index) => (
							<Link
								className="cursor-pointer block hover:underline text-sm"
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
				<div>
					<H3 className="mb-3" color="black">
						Inhoud
					</H3>

					<ul className="bg-tertair px-5 py-6 text-primary rounded-2xl [&>a:not(:last-child)]:mb-2">
						{headers.map((header, index) => (
							<Link
								className="cursor-pointer block hover:underline"
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
				</div>
			)}
		</div>
	);
};

export default TableOfContents;
