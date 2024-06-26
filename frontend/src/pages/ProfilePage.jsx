import Footer from "../components/Footer";
import Meta from "../components/Meta";
import MyCourses from "../components/MyCourses";
import ProfileDetails from "../components/ProfileDetails";
import { useSelector } from "react-redux";

const ProfilePage = () => {
	const { userInfo } = useSelector((state) => state.auth);

	return (
		<>
			<Meta title="Profile | LearnHub" />
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
