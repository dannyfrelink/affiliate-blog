import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

interface DetailsProps {
	children: React.ReactNode;
	className?: string;
	summary: string;
	summaryClass?: string;
}

const Details: React.FC<DetailsProps> = ({
	children,
	className = "",
	summary,
	summaryClass = "",
}) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className={className}>
			<div
				className="flex justify-between"
				onClick={() => setOpen(!open)}
			>
				<li className={summaryClass}>{summary}</li>

				{open ? (
					<KeyboardArrowUpRoundedIcon
						className="!max-h-7"
						fontSize="large"
					/>
				) : (
					<KeyboardArrowDownRoundedIcon
						className="!max-h-7"
						fontSize="large"
					/>
				)}
			</div>

			<div className={`${open ? "block" : "hidden"}`}>{children}</div>
		</div>
	);
};

export default Details;
