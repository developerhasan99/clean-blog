const express = require("express");
const mongoose = require("mongoose");
const posts = require("./lib/posts");
const authRouter = require("./routers/auth");

// setup Express app
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(authRouter);

app.get("/post", (req, res) => {
	res.render("post");
});

const pageInfo = {
	seoTitle: "",
	heading: "A clean and simple blog",
	subHeading: "A blog by Mehedi Hasan",
};

app.get("/", (req, res) => {
	res.render("index", { posts, pageInfo });
});

// start the express server
const PORT = process.env.PORT || 9999;

// connect database to the application
mongoose
	.connect("mongodb://127.0.0.1:27017/clean-blog")
	.then((data) => {
		app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
	})
	.catch((err) => console.error(err));
