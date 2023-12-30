import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import BlogLocation from "../pages/Blogs/BlogLocation";
import BlogOverview from "../pages/Blogs/BlogOverview";
import BlogPost from "../pages/Blogs/BlogPost";
import { useAppContext } from "./AppContext";

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<BlogOverview />} />
				<Route path="/blogs/:location" element={<BlogLocation />} />
				<Route path="/blogs/:location/:blog" element={<BlogPost />} />
				<Route path="/accommodaties" element={<Home />} />
				<Route path="/over-ons" element={<About />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
