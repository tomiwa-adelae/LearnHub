import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Desc Auth user & get the token
// @route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		res.status(400);
		throw new Error("Please enter all fields!");
	}

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);

		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			matricNumber: user.matricNumber,
			department: user.department,
			faculty: user.faculty,
			profilePicture: user.profilePicture,
			courses: user.courses,
			gender: user.gender,
			isLecturer: user.isLecturer,
		});
	} else {
		console.log("Error in Auth user controller");
		res.status(401);
		throw new Error("Invalid email or password!");
	}
});

// Desc Register a new user
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, matricNumber, password } = req.body;

	if (!name || !email || !matricNumber || !password) {
		res.status(400);
		throw new Error("Please enter all fields!");
	}

	if (matricNumber.length < 8 && matricNumber.length > 12) {
		res.status(400);
		throw new Error("Invalid matriculation/admission number!");
	}

	if (password.length <= 5) {
		res.status(400);
		throw new Error("Password should be at least 6 character!");
	}

	const matricNumberExist = await User.findOne({ matricNumber });

	if (matricNumberExist) {
		res.status(400);
		throw new Error(
			"User with matriculation/admission number already exist!"
		);
	}

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new error("User with email already exists!");
	}

	const user = await User.create({
		name,
		email,
		matricNumber,
		password,
	});

	if (user) {
		generateToken(res, user._id);

		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			matricNumber: user.matricNumber,
			department: user.department,
			faculty: user.faculty,
			profilePicture: user.profilePicture,
			courses: user.courses,
			gender: user.gender,
			isLecturer: user.isLecturer,
		});
	} else {
		console.log("Error in Register user controller");
		res.status(401);
		throw new Error("500 - Internal Server Error!");
	}
});

export { authUser, registerUser };
