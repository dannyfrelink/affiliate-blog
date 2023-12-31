import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useAppContext } from "../../config/AppContext";

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
	const { screenSize } = useAppContext();

	return (
		<div className={className}>
			<button
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
			</button>

			<div
				className={`${
					open
						? `block ${
								screenSize > 750 &&
								"absolute animate-[blogsFadeIn_0.5s_ease-out_forwards] -ml-11 bg-primary rounded-b-xl pt-2 pb-4 px-8 shadow-subtle z-[-2]"
						  }`
						: "hidden"
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default Details;
