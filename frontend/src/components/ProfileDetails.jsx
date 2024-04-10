import { FaCircleUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import { resetLecturerCourses } from "../slices/lecturerCourseSlice";
import { resetStudentCourses } from "../slices/studentCourseSlice";

const ProfileDetails = ({ userInfo }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			dispatch(resetLecturerCourses());
			dispatch(resetStudentCourses());
			navigate("/login");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="profile-details">
			<img src={userInfo.profilePicture} alt={userInfo.name} />
			<section>
				<div className="details">
					<h3 className="text-primary">{userInfo.name}</h3>
					<h6>{userInfo.email}</h6>
					<h6>
						Matriculation/Admission number of{" "}
						{userInfo.matricNumber}
					</h6>
					<h6>Department of {userInfo.department}</h6>
					<h6>Faculty of {userInfo.faculty}</h6>
				</div>

				<div>
					<Link to="/edit-profile" className="btn btn-grey">
						Edit profile
						<MdEditSquare />
					</Link>
					<Link to="/change-password" className="btn btn-secondary">
						Change password
						<IoMdLock />
					</Link>
					<button onClick={logoutHandler} className="btn btn-danger">
						Logout
						<IoLogOut />
					</button>
				</div>
			</section>
		</div>
	);
};

export default ProfileDetails;
