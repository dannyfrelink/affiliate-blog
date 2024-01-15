import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useAppContext } from "../../config/AppContext";
import H4 from "../typography/H4";

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
		<div className="bg-tertair w-fit rounded-2xl text-primary">
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

			<div
				className={`${
					open ? `block ${screenSize > 750 && "block"}` : "hidden"
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default Details;
