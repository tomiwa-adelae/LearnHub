import Footer from "../components/Footer";
import MyCourses from "../components/MyCourses";
import ProfileDetails from "../components/ProfileDetails";
import { useSelector } from "react-redux";

const ProfilePage = () => {
	const { userInfo } = useSelector((state) => state.auth);

	return (
		<>
			<div className="profilepage">
				<div className="container">
					<ProfileDetails userInfo={userInfo} />
					<MyCourses />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProfilePage;
