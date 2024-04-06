import { IoChatbox } from "react-icons/io5";
import Material from "./Material";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseMaterials = ({ course }) => {
	return (
		<div className="course-materials">
			<div className="head">
				<h4 className="text-primary">Course materials</h4>
				{course.user.isLecturer ? (
					<Link
						to={`/new-pdf/${course._id}`}
						className="btn btn-primary"
					>
						<MdPostAdd /> New PDF
					</Link>
				) : (
					<Link to="/chat" className="btn btn-primary">
						<IoChatbox /> Chat with Lecturer
					</Link>
				)}
			</div>

			<div className="materials">
				{course.coursePDFs.map((pdf) => (
					<Material key={pdf.coursePDF} pdf={pdf} />
				))}
			</div>
		</div>
	);
};

export default CourseMaterials;
