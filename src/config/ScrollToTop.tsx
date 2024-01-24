import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "./AppContext";

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();
	const { setNavOpen } = useAppContext();

	useEffect(() => {
		window.scrollTo(0, 0);
		setNavOpen(false);
	}, [pathname]);

	return null;
};

export default ScrollToTop;
