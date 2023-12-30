import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface CloseButtonProps {
	className: string;
	closeMenu: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ className, closeMenu }) => {
	return (
		<div className={className} onClick={closeMenu}>
			<CloseRoundedIcon fontSize="large" />
		</div>
	);
};

export default CloseButton;
