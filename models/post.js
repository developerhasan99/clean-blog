const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
	title: {
		type: String,
		maxLength: 128,
		required: true,
		trim: true,
	},
});
