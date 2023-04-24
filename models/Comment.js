const mongoose = require("mongoose");
const User = require("./User");
const Post = require("./Post");

/**
 * user
 * post
 * body
 * replies
 * *user
 * *body
 * *createdAt
 */

const commentSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: User,
		required: true,
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: Post,
		required: true,
	},
	body: {
		type: String,
		trim: true,
		required: true,
	},
	replies: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: User,
				required: true,
			},
			body: {
				type: String,
				trim: true,
				required: true,
			},
			createdAt: {
				type: Date,
				default: new Date(),
			},
		},
	],
});

module.exports = new mongoose.model("Comment", commentSchema);
