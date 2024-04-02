import CourseHead from "../components/CourseHead";
import CourseMaterials from "../components/CourseMaterials";

const CoursePage = () => {
	return (
		<div className="coursepage">
			<div className="container">
				<CourseHead />
				<CourseMaterials />
			</div>
		</div>
	);
};

export default CoursePage;
