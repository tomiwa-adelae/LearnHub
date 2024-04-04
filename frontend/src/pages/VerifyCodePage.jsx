import { IoBarcode, IoLogInSharp } from "react-icons/io5";
import Footer from "../components/Footer";

const VerifyCodePage = () => {
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
					<form>
						<h4>Verify code</h4>
						<small>
							<span className="text-opacity">
								Enter the code sent to
							</span>{" "}
							<strong>johndoe@gmail.com</strong>
						</small>
						<div>
							<label htmlFor="code">Code</label>
							<input type="text" placeholder="012345" id="code" />
							<IoBarcode />
						</div>
						<button className="btn btn-white">
							Continue
							<IoLogInSharp />
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
		</>
	);
};

export default VerifyCodePage;
