import { MdPostAdd } from "react-icons/md";
import Course from "./Course";
import CoursesModal from "./CoursesModal";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyCourses = ({ courses }) => {
	const [showModal, setShowModal] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	return (
		<>
			<div className="my-courses">
				<div className="head">
					<h4 className="text-primary">My Courses</h4>
					{userInfo.isLecturer ? (
						<>
							<Link
								to="/new-course"
								onClick={(e) => setShowModal(!showModal)}
								className="btn btn-primary"
							>
								<MdPostAdd /> New courses
							</Link>
						</>
					) : (
						<>
							<button
								onClick={(e) => setShowModal(!showModal)}
								className="btn btn-primary"
							>
								<MdPostAdd /> Add courses
							</button>
						</>
					)}
				</div>

				{courses.length === 0 && (
					<h6>You have not selected any courses yet! Select now</h6>
				)}
				<div className="courses">
					{courses.map((course) => (
						<Course key={course._id} course={course} />
					))}
					{/* <Course />
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
					<Course /> */}
				</div>
			</div>
			{showModal && (
				<CoursesModal closeModal={() => setShowModal(!showModal)} />
			)}
		</>
	);
};

export default MyCourses;
