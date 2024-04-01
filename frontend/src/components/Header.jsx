import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link to="/">
						<h4>
							Learn<span>Hub</span>
						</h4>
					</Link>
				</div>
				<nav className="links">
					<ul>
						<Link to="/login">
							<li>Login</li>
						</Link>
						<Link to="/register">
							<li>Register</li>
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
