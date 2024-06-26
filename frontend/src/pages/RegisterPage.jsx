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
								<option value="Accounting & Finance">
									Accounting & Finance
								</option>
								<option value="Agricultural economics">
									Agricultural economics
								</option>
								<option value="Architecture">
									Architecture
								</option>
								<option value="Banking & Finance">
									Banking & Finance
								</option>
								<option value="Biochemistry">
									Biochemistry
								</option>
								<option value="Business Administration">
									Business Administration
								</option>
								<option value="Civil Engineering">
									Civil Engineering
								</option>
								<option value="Computer Engineering">
									Computer Engineering
								</option>
								<option value="Computer Science">
									Computer Science
								</option>
								<option value="Computer Science(ICT Option)">
									Computer Science(ICT Option)
								</option>
								<option value="Crop & Animal Science">
									Crop & Animal Science
								</option>
								<option value="Economics">Economics</option>
								<option value="Electrical Engineering">
									Electrical Engineering
								</option>
								<option value="English">English</option>
								<option value="Entrepreneurship studies">
									Entrepreneurship studies
								</option>
								<option value="Environmental Health Science">
									Environmental Health Science
								</option>
								<option value="Estate Management">
									Estate Management
								</option>
								<option value="Geo-Informatics">
									Geo-Informatics
								</option>
								<option value="Geology">Geology</option>
								<option value="History">History</option>
								<option value="Industrial Chemistry">
									Industrial Chemistry
								</option>
								<option value="Industrial Relations & Personnel Management">
									Industrial Relations & Personnel Management
								</option>
								<option value="International Studies">
									International Studies
								</option>
								<option value="Law">Law</option>
								<option value="Library & Information Science">
									Library & Information Science
								</option>
								<option value="Mass Communication">
									Mass Communication
								</option>
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
								<option value="Performing Arts & Musics">
									Performing Arts & Musics
								</option>
								<option value="Physics">Physics</option>
								<option value="Political Science">
									Political Science
								</option>
								<option value="Radiography & Radiation Science">
									Radiography & Radiation Science
								</option>
								<option value="Religious Studies">
									Religious Studies
								</option>
								<option value="Statistics">Statistics</option>
								<option value="Surveying">Surveying</option>
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
								<option value="Peace Studies & Conflict Resolution">
									Peace Studies & Conflict Resolution
								</option>
								<option value="Social Science">
									Social Science
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
