import { IoLogInSharp, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";

import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="loginpage">
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
						/>
						<MdEmail />
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
						Login
						<IoLogInSharp />
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
