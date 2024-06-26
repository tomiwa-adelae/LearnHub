import { Link } from "react-router-dom";

const Course = ({ course }) => {
	return (
		<Link to={`/course/${course._id}`}>
			<div
				style={{ borderColor: `${course.courseColor}` }}
				className="course"
			>
				<h5>
					{course.courseCode} - {course.courseTitle}
				</h5>

				<div>
					<h6>Course unit: {course.courseUnit}</h6>
					<h6>Course lecturer: {course.user.name}</h6>

					<h6>Last updated: 21st of March, 2024</h6>
				</div>
			</div>
		</Link>
	);
};

export default Course;
