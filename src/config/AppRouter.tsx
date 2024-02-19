import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import BlogOverview from "../pages/blogs/BlogOverview";
import BlogPost from "../pages/blogs/BlogPost";
import Accommodations from "../pages/Accommodations";
import ScrollToTop from "./ScrollToTop";

const AppRouter: React.FC = () => {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/indonesie" element={<BlogOverview />} />
				<Route path="/indonesie/:href" element={<BlogPost />} />
				<Route path="/accommodaties" element={<Accommodations />} />
				<Route path="/over-ons" element={<About />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
