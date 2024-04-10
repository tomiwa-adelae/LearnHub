import { IoBarcode, IoLogIn, IoLogInSharp } from "react-icons/io5";
import Footer from "../components/Footer";
import { useVerifyCodeMutation } from "../slices/userApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { SmallLoader } from "../components/Loader";
import { useState } from "react";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";

const VerifyCodePage = () => {
	const { email } = useParams();

	const navigate = useNavigate();
	const [code, setCode] = useState("");

	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const [verifyCode, { isLoading }] = useVerifyCodeMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!code) return setShowAlertMessage("Please enter verification code");

		try {
			setShowAlertMessage(null);
			const { id } = await verifyCode({ email, code }).unwrap();
			setShowSuccessMessage(
				`Verification successful! Create new password!`
			);

			setTimeout(() => {
				navigate(`/update-password/${id}/${code}/${email}`);
			}, 3000);
		} catch (error) {
			setShowAlertMessage(error.data.message);
		}
	};

	return (
		<>
			<div className="verifycodepage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Verify</span>{" "}
							identity,
						</h4>
						<h3>
							Enter the{" "}
							<span className="text-primary">code sent</span>
						</h3>
					</section>
					<form onSubmit={submitHandler}>
						<h4>Verify code</h4>
						<small>
							<span className="text-opacity">
								Enter the code sent to
							</span>{" "}
							<strong>{email}</strong>
						</small>
						<div>
							<label htmlFor="code">Code</label>
							<input
								type="text"
								placeholder="012345"
								id="code"
								value={code}
								onChange={(e) => setCode(e.target.value)}
							/>
							<IoBarcode />
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
								Code is valid for
							</span>{" "}
							<strong>1 hour</strong>
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

export default VerifyCodePage;
