const express = require("express");
const { renderToNodeStream } = require("react-dom/server");
const { StaticRouter } = require("react-router-dom");
const { matchRoutes } = require("react-router-config");
const { SitemapStream, streamToPromise } = require("sitemap");
// const routes = require("./src/routes");

const app = express();

const routes = [
	{ path: "/", exact: true, component: "Home" },
	{ path: "/blogs", component: "BlogOverview" },
	{ path: "/blogs/:id", component: "BlogPost" },
	{ path: "/accommodaties", component: "Accommodations" },
	{ path: "/over-ons", component: "About" },
];

const routeStrings = routes.map((route) => route.path);

app.get("/sitemap.xml", (req, res) => {
	const sitemap = new SitemapStream({
		hostname: "http://localhost:3000",
	});

	routeStrings.map((url) => {
		sitemap.write({
			url,
			changefreq: "monthly",
			priority: 0.7,
		});
	});

	sitemap.end();
	streamToPromise(sitemap).then((sm) => {
		res.header("Content-Type", "application/xml");
		res.send(sm);
	});
});

app.listen(3000, () => console.log("Server started on port 3000"));
