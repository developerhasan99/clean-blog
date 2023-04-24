const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const posts = require("./lib/posts");
const authRouter = require("./routes/authRoutes");

// setup Express app
const app = express();
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// setup routers
app.use(authRouter);

const pageInfo = {
	seoTitle: "",
	heading: {
		content: "A clean and simple blog",
		fontSize: "4rem",
	},
	subHeading: "A blog by Mehedi Hasan",
};

app.get("/post", (req, res) => {
	res.render("post", { pageInfo });
});

app.get("/", (req, res) => {
	res.render("index", { posts, pageInfo });
});

// start the express server
const PORT = process.env.PORT || 8080;
// connect database to the application
mongoose
	.connect("mongodb://127.0.0.1:27017/clean-blog")
	.then((data) => {
		app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
	})
	.catch((err) => console.error(err));
