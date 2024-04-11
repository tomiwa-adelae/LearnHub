import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoEyeOffSharp, IoEyeSharp, IoLogIn } from "react-icons/io5";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdateNewPasswordMutation } from "../slices/userApiSlice";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import { SmallLoader } from "../components/Loader";
import Meta from "../components/Meta";

const UpdatePasswordPage = () => {
	const navigate = useNavigate();
	const { email, code, id } = useParams();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const [updateNewPassword, { isLoading }] = useUpdateNewPasswordMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		setShowAlertMessage(null);
		try {
			if (!newPassword || !confirmPassword)
				return setShowAlertMessage("Please enter all fields!");

			await updateNewPassword({
				id,
				code,
				newPassword,
				confirmPassword,
			}).unwrap();

			setShowSuccessMessage(
				"Password successfully updated! Login with new password!"
			);

			setTimeout(() => {
				navigate(`/login`);
			}, 3000);
		} catch (error) {
			setShowAlertMessage(error.data.message);
		}
	};

	return (
		<>
			<Meta title="Update password | LearnHub" />
			<div className="updatepasswordpage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Welcome</span> back,
						</h4>
						<h3>
							Update your{" "}
							<span className="text-primary">password</span>
						</h3>
					</section>
					<form onSubmit={submitHandler}>
						<h4>Update password</h4>
						<small>
							<strong>{email}</strong>
						</small>
						<div>
							<label htmlFor="password">Password</label>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="password"
								value={newPassword}
								onChange={(e) => setNewPassword(e.target.value)}
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
							<label htmlFor="confirmPassword">Password</label>
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
									Continue
									<IoLogIn />
								</>
							)}
						</button>
					</form>
				</div>
			</div>
			<Footer />
			{showSuccessMessage && (
				<ToastSuccessMessage message={showSuccessMessage} />
			)}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</>
	);
};

export default UpdatePasswordPage;
