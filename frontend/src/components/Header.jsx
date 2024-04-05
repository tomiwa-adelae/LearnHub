import { FaCircleUser } from "react-icons/fa6";
import { PiChatsFill } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
	const { userInfo } = useSelector((state) => state.auth);

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
						{userInfo ? (
							<>
								<Link to="/dashboard">
									<MdSpaceDashboard /> <span>Dashboard</span>
								</Link>
								<Link to="/chat">
									<PiChatsFill /> <span>Chats</span>
								</Link>
								<Link to="/profile">
									<img src={userInfo.profilePicture} />
									<span>{userInfo.name}</span>
								</Link>
							</>
						) : (
							<>
								<Link to="/login">
									<IoLogIn />
									<span>Login</span>
								</Link>
								<Link to="/register">
									<IoLogIn />
									<span>Register</span>
								</Link>
							</>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
