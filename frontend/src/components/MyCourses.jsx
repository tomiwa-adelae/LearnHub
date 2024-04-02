import { MdPostAdd } from "react-icons/md";
import Course from "./Course";

const MyCourses = () => {
	return (
		<div className="my-courses">
			<div className="head">
				<h4 className="text-primary">My Courses</h4>
				<button className="btn btn-primary">
					<MdPostAdd /> Add courses
				</button>
				{/* If logged in as a lecturer */}
				{/* <button className="btn btn-primary">
					<MdPostAdd /> New courses
				</button> */}
			</div>

			<div className="courses">
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
				<Course />
			</div>
		</div>
	);
};

export default MyCourses;
