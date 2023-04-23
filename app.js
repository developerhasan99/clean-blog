const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/post", (req, res) => {
	res.render("post");
});

const posts = [
	{
		link: "/post",
		title: "Man must explore, and this is exploration at its greatest",
		subtitle: "Problems look mighty small from 150 miles up",
		date: "September 24, 2022",
		author: "Mehedi Hasan",
	},
	{
		link: "/post",
		title: "Man must explore, and this is exploration at its greatest",
		subtitle: "Problems look mighty small from 150 miles up",
		date: "September 24, 2022",
		author: "Mehedi Hasan",
	},
	{
		link: "/post",
		title: "Man must explore, and this is exploration at its greatest",
		subtitle: "Problems look mighty small from 150 miles up",
		date: "September 24, 2022",
		author: "Mehedi Hasan",
	},
	{
		link: "/post",
		title: "Man must explore, and this is exploration at its greatest",
		subtitle: "Problems look mighty small from 150 miles up",
		date: "September 24, 2022",
		author: "Mehedi Hasan",
	},
];

const pageInfo = {
	seoTitle: "",
	heading: "A clean and simple blog",
	subHeading: "A blog by Mehedi Hasan",
};

app.get("/", (req, res) => {
	res.render("index", { posts, pageInfo });
});

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
