import React from "react";
import { Link } from "react-scroll";

interface TableOfContentsProps {
	headers: string[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headers }) => {
	return (
		<ul>
			{headers.map((header, index) => (
				<Link
					className="cursor-pointer"
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
	);
};

export default TableOfContents;
