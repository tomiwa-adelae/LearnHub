import { useEffect, useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoEyeOffSharp, IoEyeSharp, IoLogIn } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineNumbers } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import Footer from "../components/Footer";

import { useRegisterMutation } from "../slices/userApiSlice";
import { ToastErrorMessage } from "../components/ToastMessage";
import { SmallLoader } from "../components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import Meta from "../components/Meta";

const RegisterPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [matricNumber, setMatricNumber] = useState("");
	const [department, setDepartment] = useState("");
	const [faculty, setFaculty] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const [register, { isLoading }] = useRegisterMutation();

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
			const res = await register({
				name,
				email,
				matricNumber,
				department,
				faculty,
				password,
			}).unwrap();
			dispatch(setCredentials({ ...res }));

			navigate("/dashboard");
		} catch (error) {
			setShowAlertMessage(error.data.message);
		}
	};

	return (
		<>
			<Meta title="Register | LearnHub" />
			<div className="registerpage">
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
						<h4>Register</h4>
						<small>
							<span className="text-opacity">
								Already have an account?
							</span>{" "}
							<Link to="/login">
								<strong>Login</strong>
							</Link>
						</small>
						<div>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								placeholder="John Doe"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<FaCircleUser />
						</div>
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
							<label htmlFor="matricNumber">
								Matriculation/Admission number
							</label>
							<input
								type="text"
								placeholder="20J03001"
								id="matricNumber"
								value={matricNumber}
								onChange={(e) =>
									setMatricNumber(e.target.value)
								}
							/>
							<MdOutlineNumbers />
						</div>
						<div>
							<label htmlFor="department">Department</label>

							<select
								name="department"
								id="department"
								value={department}
								onChange={(e) => setDepartment(e.target.value)}
							>
								<option value="">Select department</option>
								<option value="Mathematics">Mathematics</option>
								<option value="Mechanical Engineering">
									Mechanical Engineering
								</option>
								<option value="Medical Lab Science">
									Medical Lab Science
								</option>
								<option value="Microbiology">
									Microbiology
								</option>
								<option value="Nursing">Nursing</option>
								<option value="Peace Studies & Conflict Resolution">
									Peace Studies & Conflict Resolution
								</option>
							</select>
							<FcDepartment />
						</div>
						<div>
							<label htmlFor="faculty">Faculty</label>

							<select
								name="faculty"
								id="faculty"
								value={faculty}
								onChange={(e) => setFaculty(e.target.value)}
							>
								<option value="">Select faculty</option>
								<option value="Agriculture">Agriculture</option>
								<option value="Basic Medical Science">
									Basic Medical Science
								</option>
								<option value="Communication & Media Studies">
									Communication & Media Studies
								</option>
								<option value="Education">Education</option>
								<option value="Environmental Science">
									Environmental Science
								</option>
								<option value="Humanities">Humanities</option>
								<option value="Law">Law</option>
								<option value="Management Science">
									Management Science
								</option>
								<option value="Natural Science">
									Natural Science
								</option>
							</select>
							<FcDepartment />
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
									Register
									<IoLogIn />
								</>
							)}
						</button>
						<small>
							<span className="text-opacity">
								Are you a lecturer?
							</span>{" "}
							<Link to="/register-lecturer">
								<strong>Register here</strong>
							</Link>
						</small>
					</form>
				</div>
			</div>
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
			<Footer />
		</>
	);
};

export default RegisterPage;
