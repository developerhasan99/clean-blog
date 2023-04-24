const mongoose = require("mongoose");
const User = require("./User");
const Comment = require("./Comment");

/**
 * title
 * body
 * thumbnail
 * tags
 * author
 * comments
 * like
 * dislike
 * readTime
 * status
 */

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			maxLength: 128,
			required: true,
			trim: true,
		},
		body: String,
		thumbnail: String,
		tags: [String],
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: User,
			required: true,
		},
		comments: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Comment,
		},
		like: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: User,
			},
		],
		dislike: [
			{
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: User,
			},
		],
		readTime: String,
		status: string,
	},
	{
		timestamp: true,
	}
);

module.exports = new mongoose.model("Post", postSchema);
