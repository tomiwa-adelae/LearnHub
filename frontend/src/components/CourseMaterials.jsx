import { IoChatbox } from "react-icons/io5";
import Material from "./Material";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseMaterials = ({ userInfo, course, pdfs }) => {
	return (
		<div className="course-materials">
			<div className="head">
				<h4 className="text-primary">Course materials</h4>
				{userInfo.isLecturer ? (
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
				{pdfs.length === 0 ? (
					<h6>This course does not contain any PDF materials.</h6>
				) : (
					pdfs.map((pdf) => (
						<div
							style={{ borderColor: `${course.courseColor}` }}
							key={pdf._id}
							className="material"
						>
							<Material pdfObject={pdf} />
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default CourseMaterials;
