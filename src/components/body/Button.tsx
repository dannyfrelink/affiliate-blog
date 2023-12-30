import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	openNav: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, openNav }) => {
	return (
		<button
			onClick={openNav}
			className={`${className} text-primary font-bold bg-secondary py-1.5 px-2.5 rounded-[12px_20px_8px_17px]`}
		>
			{children}
		</button>
	);
};

export default Button;
