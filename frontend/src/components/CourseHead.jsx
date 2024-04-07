const CourseHead = ({ course }) => {
	return (
		<div
			style={{ borderColor: `${course.courseColor}` }}
			className="course-head"
		>
			<h5>Course code: {course.courseCode}</h5>
			<h5>Course title: {course.courseTitle}</h5>
			<h5>Course unit: {course.courseUnit} unit</h5>
			<h5>Course lecturer:{course.user.name}</h5>
		</div>
	);
};

export default CourseHead;
