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
import { useUpdatePasswordMutation } from "../slices/userApiSlice";

import { useSelector } from "react-redux";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import { SmallLoader } from "../components/Loader";
import { useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {
	const navigate = useNavigate();

	const [showCurrentPassword, setShowCurrentPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const [updatePassword, { isLoading }] = useUpdatePasswordMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		setShowAlertMessage(null);

		try {
			await updatePassword({
				currentPassword,
				newPassword,
				confirmPassword,
			}).unwrap();

			setShowSuccessMessage("Password updated successfully!");

			setTimeout(() => {
				navigate("/profile");
			}, 3000);
		} catch (error) {
			setShowAlertMessage(error.data.message);
		}
	};

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
					<form onSubmit={submitHandler}>
						<h4>Change password</h4>
						<div>
							<label htmlFor="currentPassword">
								Current password
							</label>
							<input
								type={showCurrentPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="currentPassword"
								value={currentPassword}
								onChange={(e) =>
									setCurrentPassword(e.target.value)
								}
							/>
							<IoMdLock />
							{showCurrentPassword ? (
								<IoEyeOffSharp
									onClick={() =>
										setShowCurrentPassword(
											!showCurrentPassword
										)
									}
									className="password"
								/>
							) : (
								<IoEyeSharp
									onClick={() =>
										setShowCurrentPassword(
											!showCurrentPassword
										)
									}
									className="password"
								/>
							)}
						</div>
						<div>
							<label htmlFor="newPassword">New password</label>
							<input
								type={showNewPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="newPassword"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
							/>
							<IoMdLock />
							{showNewPassword ? (
								<IoEyeOffSharp
									onClick={() =>
										setShowNewPassword(!showNewPassword)
									}
									className="password"
								/>
							) : (
								<IoEyeSharp
									onClick={() =>
										setShowNewPassword(!showNewPassword)
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
								type={showConfirmPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="confirmPassword"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>
							<IoMdLock />
							{showConfirmPassword ? (
								<IoEyeOffSharp
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
									}
									className="password"
								/>
							) : (
								<IoEyeSharp
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
									}
									className="password"
								/>
							)}
						</div>
						<button className="btn btn-white">
							{isLoading ? (
								<SmallLoader />
							) : (
								<>
									Save changes
									<IoSave />
								</>
							)}
						</button>
					</form>
				</div>
			</div>
			{showSuccessMessage && (
				<ToastSuccessMessage message={showSuccessMessage} />
			)}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
			<Footer />
		</>
	);
};

export default ChangePasswordPage;
