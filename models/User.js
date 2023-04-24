const mongoose = require("mongoose");
const Profile = require("./Profile");

/**
 * username
 * password
 * email
 * profile
 */

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			maxLength: 35,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
			trim: true,
		},
		email: {
			type: String,
			trim: true,
		},
		profile: {
			type: mongoose.Schema.Types.ObjectId,
			ref: Profile,
		},
	},
	{
		timestamps: true,
	}
);

exports.default = new mongoose.model("User", userSchema);
