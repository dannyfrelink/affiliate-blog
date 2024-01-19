import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface CloseButtonProps {
	className: string;
	closeMenu: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ className, closeMenu }) => {
	return (
		<CloseRoundedIcon
			className={className}
			onClick={closeMenu}
			fontSize="large"
		/>
	);
};

export default CloseButton;
