import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import BlogOverview from "../pages/Blogs/BlogOverview";
import BlogPost from "../pages/Blogs/BlogPost";
import Accommodations from "../pages/Accommodations";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<BlogOverview />} />
				<Route path="/blogs/:blog" element={<BlogPost />} />
				<Route path="/accommodaties" element={<Accommodations />} />
				<Route path="/over-ons" element={<About />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
