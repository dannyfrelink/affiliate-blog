import React from "react";
import { useAppContext } from "../../config/AppContext";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	openNav?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, openNav }) => {
	const { screenSize } = useAppContext();
	return (
		<button
			onClick={openNav}
			className={`${className} ${
				screenSize < 750
					? "text-sm py-1.5 px-2.5"
					: screenSize < 1250
					? "text-base py-2 px-3"
					: "text-lg py-2.5 px-4"
			} shadow-subtle text-primary font-bold bg-secondary rounded-[12px_20px_8px_17px]`}
		>
			{children}
		</button>
	);
};

export default Button;
