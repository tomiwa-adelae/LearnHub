import MyCourses from "../components/MyCourses";
import ProfileDetails from "../components/ProfileDetails";

const ProfilePage = () => {
	return (
		<div className="profilepage">
			<div className="container">
				<ProfileDetails />
				<MyCourses />
			</div>
		</div>
	);
};

export default ProfilePage;
