import { useState } from "react";
import { IoMdLock } from "react-icons/io";
import { IoEyeOffSharp, IoEyeSharp, IoLogInSharp } from "react-icons/io5";
import Footer from "../components/Footer";

const UpdatePasswordPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
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
					<form>
						<h4>Update password</h4>
						<small>
							<strong>johndoe@gmail.com</strong>
						</small>
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
							Continue
							<IoLogInSharp />
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default UpdatePasswordPage;
