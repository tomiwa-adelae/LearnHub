import CourseHead from "../components/CourseHead";
import CourseMaterials from "../components/CourseMaterials";
import Footer from "../components/Footer";
import PDFDisplay from "../components/PDFDisplay";

const CoursePage = () => {
	return (
		<>
			<div className="coursepage">
				<div className="container">
					<CourseHead />
					<CourseMaterials />
				</div>
				{/* <PDFDisplay /> */}
			</div>
			<Footer />
		</>
	);
};

export default CoursePage;
