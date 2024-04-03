import { FaCircleUser } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdEditSquare } from "react-icons/md";

const ProfileDetails = () => {
	return (
		<div className="profile-details">
			<FaCircleUser className="user-icon text-primary" />

			<section>
				<div className="details">
					<h3 className="text-primary">John Doe</h3>
					<h6>johndoe@gmail.com</h6>
					<h6>Matriculation/Admission number of 20T07011</h6>
					<h6>Department of Computer science</h6>
					<h6>Faculty of Natural science</h6>
				</div>

				<div>
					<button className="btn btn-grey">
						<MdEditSquare /> Edit profile
					</button>
					<button className="btn btn-secondary">
						<IoMdLock /> Change password
					</button>
					<button className="btn btn-danger">
						<IoLogOut /> Logout
					</button>
				</div>
			</section>
		</div>
	);
};

export default ProfileDetails;
