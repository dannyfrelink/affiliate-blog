import React from "react";
import { Link } from "react-scroll";
import H3 from "../../typography/H3";

interface TableOfContentsProps {
	headers: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headers }) => {
	return (
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
	);
};

export default TableOfContents;
