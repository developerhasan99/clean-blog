exports.signupGetController = (req, res, next) => {
	const pageInfo = {
		seoTitle: "",
		heading: {
			content: "A clean and simple blog",
			fontSize: "4rem",
		},
		subHeading: "A blog by Mehedi Hasan",
	};

	res.render("auth/signup", { pageInfo });
};

exports.signupPostController = (req, res, next) => {};

exports.loginGetController = (req, res, next) => {
	res.send("mehedi hasan", { pageInfo });
};

exports.loginPostController = (req, res, next) => {};

exports.logoutController = (req, res, next) => {};
