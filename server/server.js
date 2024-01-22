const express = require("express");
const app = express();
const { SitemapStream, streamToPromise } = require("sitemap");
const blogData = require("../src/data/blogs.json");

const routes = [
	{ path: "/", exact: true, component: "Home" },
	{ path: "/indonesie", component: "BlogOverview" },
	{ path: "/indonesie/:id", component: "BlogPost" },
	{ path: "/accommodaties", component: "Accommodations" },
	{ path: "/over-ons", component: "About" },
];
const routeStrings = routes.map((route) => route.path);

app.get("/sitemap.xml", (req, res) => {
	const sitemap = new SitemapStream({
		hostname: "http://localhost:3000",
	});

	const writeSitemap = (url, changefreq, priority) => {
		sitemap.write({
			url,
			changefreq,
			priority,
		});
	};

	routeStrings.map((url) => {
		const blogs = [];
		Object.values(blogData.blogs).map((blog) =>
			blog.map((b) => blogs.push(b))
		);
		let changefreq;
		let priority;

		if (url === "/indonesie/:href") {
			blogs.map((blog) => {
				url = `/indonesie/${blog.href}`;
				changefreq = "weekly";
				priority = 1;
				writeSitemap(url, changefreq, priority);
			});
		} else if (url === "/indonesie" || url === "/accommodaties") {
			changefreq = "weekly";
			priority = 0.9;
			writeSitemap(url, changefreq, priority);
		} else if (url === "/") {
			changefreq = "monthly";
			priority = 0.8;
			writeSitemap(url, changefreq, priority);
		} else {
			changefreq = "yearly";
			priority = 0.7;
			writeSitemap(url, changefreq, priority);
		}
	});

	sitemap.end();
	streamToPromise(sitemap).then((sm) => {
		res.header("Content-Type", "application/xml");
		res.send(sm);
	});
});

app.listen(3000, () => console.log("Server started on port 3000"));
