import { IoLogIn, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastSuccessMessage } from "../components/ToastMessage";
import { useNavigate } from "react-router-dom";
import SmallLoader from "../components/Loader";

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const [login, { isLoading }] = useLoginMutation();

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate("/dashboard");
		}
	}, [navigate, userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setShowAlertMessage(null);

		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));

			navigate("/dashboard");
		} catch (error) {
			setShowAlertMessage(error.data.message);
		}
	};

	return (
		<>
			<div className="loginpage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Learn</span>{" "}
							Anything,
						</h4>
						<h3>
							Anytime,{" "}
							<span className="text-primary">Anywhere</span>
						</h3>
					</section>
					<form onSubmit={handleSubmit}>
						<h4>Login</h4>
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
						<div>
							<label htmlFor="password">Password</label>
							<input
								type={showPassword ? "text" : "password"}
								placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
							{isLoading ? (
								<SmallLoader />
							) : (
								<>
									Login
									<IoLogIn />
								</>
							)}
						</button>
						<small>
							<span className="text-opacity">
								Forgot your password?
							</span>{" "}
							<Link to="/reset-password">
								<strong>Reset password</strong>
							</Link>
						</small>
					</form>
				</div>
			</div>
			{showAlertMessage && (
				<ToastSuccessMessage message={showAlertMessage} />
			)}
			<Footer />
		</>
	);
};

export default LoginPage;
