const mongoose = require("mongoose");

/**
 * user
 * firstName
 * lastName
 * title
 * bio
 * profilePicture
 * links
 * posts
 * bookmarks
 */

const profileSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		firstName: {
			type: String,
			maxLength: 20,
			trim: true,
		},
		lastName: {
			type: String,
			maxLength: 20,
			trim: true,
		},
		title: {
			type: String,
			maxLength: 60,
		},
		bio: {
			type: String,
			maxLength: 300,
		},
		profilePicture: String,
		links: {
			facebook: String,
			twitter: String,
			linkedin: String,
			instagram: String,
			github: String,
			stackoverflow: String,
		},
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Post",
			},
		],

		bookmarks: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Post",
			},
		],
	},
	{
		timestamp: true,
	}
);

module.exports = profileModel = new mongoose.model("Profile", profileSchema);
