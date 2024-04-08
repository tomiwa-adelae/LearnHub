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
	const { name, email, matricNumber, password, department, faculty } =
		req.body;

	if (
		!name ||
		!email ||
		!matricNumber ||
		!department ||
		!faculty ||
		!password
	) {
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
		department,
		faculty,
		profilePicture: `https://api.dicebear.com/8.x/initials/svg?seed=${name}`,
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
			isLecturer: user.isLecturer,
		});
	} else {
		console.log("Error in Register user controller");
		res.status(401);
		throw new Error("500 - Internal Server Error!");
	}
});

// Desc Register a new lecturer
// @route POST /api/users/lecturer
// @access public
const registerLecturer = asyncHandler(async (req, res) => {
	const { name, email, password, department, faculty } = req.body;

	if (!name || !email || !department || !faculty || !password) {
		res.status(400);
		throw new Error("Please enter all fields!");
	}

	if (password.length <= 5) {
		res.status(400);
		throw new Error("Password should be at least 6 character!");
	}

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new error("Lecturer with email already exists!");
	}

	const user = await User.create({
		name,
		email,
		department,
		matricNumber: email,
		faculty,
		profilePicture: `https://api.dicebear.com/8.x/initials/svg?seed=${name}`,
		password,
		isLecturer: true,
	});

	if (user) {
		generateToken(res, user._id);

		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			department: user.department,
			faculty: user.faculty,
			profilePicture: user.profilePicture,
			isLecturer: user.isLecturer,
		});
	} else {
		console.log("Error in Register lecturer controller");
		res.status(401);
		throw new Error("500 - Internal Server Error!");
	}
});

const logoutUser = (req, res) => {
	res.cookie("jwt", "", {
		httpOnly: true,
		expires: new Date(0),
	});

	res.status(200).json({ message: "Logged out successfully!" });
};

// Desc Update a user's details
// @route PUT /api/users/profile
// @access Private
const updateUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user.id);

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		user.matricNumber = req.body.matricNumber || user.email;
		user.department = req.body.department || user.email;
		user.faculty = req.body.faculty || user.email;

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			department: updatedUser.department,
			faculty: updatedUser.faculty,
			profilePicture: updatedUser.profilePicture,
			isLecturer: updatedUser.isLecturer,
		});
	} else {
		res.status(401);
		throw new Error("500 - Internal Server Error!");
	}
});

export { authUser, registerUser, registerLecturer, logoutUser, updateUser };
