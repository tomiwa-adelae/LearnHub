import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoEyeOffSharp, IoEyeSharp, IoLogIn } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";

const RegisterLecturerPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="registerpage">
			<div className="container">
				<section>
					<h4>
						<span className="text-primary">Learn</span> Anything,
					</h4>
					<h3>
						Anytime, <span className="text-primary">Anywhere</span>
					</h3>
				</section>
				<form>
					<h4>Register as a lecturer</h4>
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
						<input type="text" placeholder="John Doe" id="name" />
						<FaCircleUser />
					</div>
					<div>
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							placeholder="johndoe@gmail.com"
							id="email"
						/>
						<MdEmail />
					</div>
					<div>
						<label htmlFor="department">Department</label>
						<select name="department" id="department">
							<option value="">Select department</option>
							<option value="Mathematics">Mathematics</option>
							<option value="Mechanical Engineering">
								Mechanical Engineering
							</option>
							<option value="Medical Lab Science">
								Medical Lab Science
							</option>
							<option value="Microbiology">Microbiology</option>
							<option value="Nursing">Nursing</option>
							<option value="Peace Studies & Conflict Resolution">
								Peace Studies & Conflict Resolution
							</option>
						</select>
						<FcDepartment />
					</div>
					<div>
						<label htmlFor="faculty">Faculty</label>

						<select name="faculty" id="faculty">
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
						/>
						<IoMdLock />
						{showPassword ? (
							<IoEyeOffSharp
								onClick={() => setShowPassword(!showPassword)}
								className="password"
							/>
						) : (
							<IoEyeSharp
								onClick={() => setShowPassword(!showPassword)}
								className="password"
							/>
						)}
					</div>
					<button className="btn btn-white">
						Register
						<IoLogIn />
					</button>
					<small>
						<span className="text-opacity">Are you a student?</span>{" "}
						<Link to="/register">
							<strong>Register here</strong>
						</Link>
					</small>
				</form>
			</div>
		</div>
	);
};

export default RegisterLecturerPage;
