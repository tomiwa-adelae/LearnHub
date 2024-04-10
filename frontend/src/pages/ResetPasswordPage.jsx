import { IoLogIn, IoLogInSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useResetPasswordMutation } from "../slices/userApiSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import { SmallLoader } from "../components/Loader";

const ResetPasswordPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");

	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const [resetPassword, { isLoading }] = useResetPasswordMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!email) return setShowAlertMessage("Please enter email address!");

		try {
			setShowAlertMessage(null);
			await resetPassword({ email }).unwrap();

			setShowSuccessMessage(`Enter the code we just sent to ${email}`);

			setTimeout(() => {
				navigate(`/verify-code/${email}`);
			}, 3000);
		} catch (error) {
			setShowAlertMessage(error.data.message);
		}
	};

	return (
		<>
			<div className="resetpasswordpage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Regain</span> access,
						</h4>
						<h3>
							Reset your{" "}
							<span className="text-primary">password</span>
						</h3>
					</section>
					<form onSubmit={submitHandler}>
						<h4>Reset password</h4>
						<small>
							<span className="text-opacity">New user?</span>{" "}
							<Link to="/register">
								<strong>Create an account</strong>
							</Link>
						</small>
						<div>
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								placeholder="johndoe@gmail.com"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<MdEmail />
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
						<small>
							<span className="text-opacity">
								Remember password?
							</span>{" "}
							<Link to="/login">
								<strong>Login now</strong>
							</Link>
						</small>
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

export default ResetPasswordPage;
