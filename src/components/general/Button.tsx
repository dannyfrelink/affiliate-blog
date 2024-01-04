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
					? "text-sm"
					: screenSize < 1250
					? "text-base"
					: "text-lg"
			} text-primary font-bold bg-secondary py-1.5 px-2.5 rounded-[12px_20px_8px_17px]`}
		>
			{children}
		</button>
	);
};

export default Button;
