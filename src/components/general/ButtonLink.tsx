import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface ButtonLinkProps {
	children: React.ReactNode;
	link: string;
	blank: boolean;
	className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
	children,
	link,
	blank = false,
	className,
}) => {
	return (
		<Link to={link} target={blank ? "blank" : undefined}>
			<Button className={className}>{children}</Button>
		</Link>
	);
};

export default ButtonLink;
