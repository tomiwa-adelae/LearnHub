import { IoLogInSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
	return (
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
				<form>
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
						/>
						<MdEmail />
					</div>
					<button className="btn btn-white">
						Continue
						<IoLogInSharp />
					</button>
					<small>
						<span className="text-opacity">Remember password?</span>{" "}
						<Link to="/login">
							<strong>Login now</strong>
						</Link>
					</small>
				</form>
			</div>
		</div>
	);
};

export default ResetPasswordPage;
