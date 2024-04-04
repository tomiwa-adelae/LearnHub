import { FaCircleUser } from "react-icons/fa6";
import { PiChatsFill } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";
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
						{/* <Link to="/login">
							<li>Login</li>
						</Link>
						<Link to="/register">
							<li>Register</li>
						</Link> */}
						<Link to="/dashboard">
							<MdSpaceDashboard /> <span>Dashboard</span>
						</Link>
						<Link to="/chat">
							<PiChatsFill /> <span>Chats</span>
						</Link>
						<Link to="/profile">
							<FaCircleUser /> <span>John Doe</span>
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
