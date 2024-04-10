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
									<span>Dashboard</span>
									<MdSpaceDashboard />
								</Link>
								<Link to="/chat">
									<span>Chats</span>
									<PiChatsFill />
								</Link>
								<Link to="/profile">
									<img
										src={userInfo.profilePicture}
										alt={userInfo.name}
									/>
									<span>{userInfo.name}</span>
								</Link>
							</>
						) : (
							<>
								<Link to="/login">
									<span>Login</span>
									<IoLogIn />
								</Link>
								<Link to="/register">
									<span>Register</span>
									<IoLogIn />
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
