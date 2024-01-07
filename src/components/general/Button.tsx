import React from "react";
import { useAppContext } from "../../config/AppContext";
import { Link } from "react-router-dom";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	link?: string;
	blank?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	onClick,
	link,
	blank = false,
}) => {
	const { screenSize } = useAppContext();
	return (
		<button
			onClick={onClick}
			className={`${className} ${
				screenSize < 750
					? "text-sm py-1.5 px-2.5"
					: screenSize < 1250
					? "text-base py-2 px-3"
					: "text-lg py-2.5 px-4"
			} shadow-subtle text-primary font-bold bg-secondary rounded-[12px_20px_8px_17px]`}
		>
			{link ? (
				<Link to={link} target={blank ? "blank" : undefined}>
					{children}
				</Link>
			) : (
				children
			)}
		</button>
	);
};

export default Button;
