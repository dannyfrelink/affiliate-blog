import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import H4 from "../typography/H4";

interface DetailsProps {
	children: React.ReactNode;
	className?: string;
	summary: string;
	summaryClass?: string;
}

const Details: React.FC<DetailsProps> = ({ children, summary }) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<section className="bg-secondary w-fit rounded-2xl text-primary">
			<button
				className="flex justify-between items-center py-1.5 px-4"
				onClick={() => setOpen(!open)}
			>
				<H4 className="" color="white">
					{summary}
				</H4>

				{open ? (
					<KeyboardArrowUpRoundedIcon
						className="!max-h-7"
						fontSize="large"
						color="inherit"
					/>
				) : (
					<KeyboardArrowDownRoundedIcon
						className="!max-h-7"
						fontSize="large"
						color="inherit"
					/>
				)}
			</button>

			<div className={`${open ? `block` : "hidden"}`}>{children}</div>
		</section>
	);
};

export default Details;
