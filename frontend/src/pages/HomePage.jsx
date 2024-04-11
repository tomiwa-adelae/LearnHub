import { Link } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { useEffect } from "react";
import Meta from "../components/Meta";

const HomePage = () => {
	return (
		<>
			<Meta />
			<div className="homepage">
				<div className="container">
					<h2>
						<span className="text-primary">Learn</span> Anything,
					</h2>
					<h1>
						Anytime, <span className="text-primary">Anywhere</span>
					</h1>
					<p>
						LearnHub is where learning meets collaboration. Join us
						to share knowledge, connect with others, and grow
						together. Welcome to LearnHub, your gateway to
						collaborative learning.
					</p>
					<Link className="btn btn-primary" to="/login">
						Start your Journey <IoArrowForwardCircleSharp />
					</Link>
				</div>
			</div>
		</>
	);
};

export default HomePage;
