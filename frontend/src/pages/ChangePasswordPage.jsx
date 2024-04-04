import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import {
	IoEyeOffSharp,
	IoEyeSharp,
	IoLogInSharp,
	IoSave,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineNumbers } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import Footer from "../components/Footer";

const ChangePasswordPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			<div className="changepasswordpage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Stay</span> secure
						</h4>
						<h3>
							Change your{" "}
							<span className="text-primary">
								password occasionally
							</span>
						</h3>
					</section>
					<form>
						<h4>Change password</h4>
						<div>
							<label htmlFor="currentPassword">
								Current password
							</label>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="currentPassword"
							/>
							<IoMdLock />
							{showPassword ? (
								<IoEyeOffSharp
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="password"
								/>
							) : (
								<IoEyeSharp
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="password"
								/>
							)}
						</div>
						<div>
							<label htmlFor="newPassword">New password</label>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="newPassword"
							/>
							<IoMdLock />
							{showPassword ? (
								<IoEyeOffSharp
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="password"
								/>
							) : (
								<IoEyeSharp
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="password"
								/>
							)}
						</div>
						<div>
							<label htmlFor="confirmPassword">
								Confirm password
							</label>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="confirmPassword"
							/>
							<IoMdLock />
							{showPassword ? (
								<IoEyeOffSharp
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="password"
								/>
							) : (
								<IoEyeSharp
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="password"
								/>
							)}
						</div>
						<button className="btn btn-white">
							Save changes
							<IoSave />
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ChangePasswordPage;
