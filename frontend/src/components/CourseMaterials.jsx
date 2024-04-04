import { IoChatbox } from "react-icons/io5";
import Material from "./Material";
import { MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseMaterials = () => {
	return (
		<div className="course-materials">
			<div className="head">
				<h4 className="text-primary">Course materials</h4>
				<Link to="/chat" className="btn btn-primary">
					<IoChatbox /> Chat with Lecturer
				</Link>

				{/* If logged in as a lecturer */}

				{/* <button className="btn btn-primary">
					<MdPostAdd /> New PDF
				</button> */}
			</div>

			<div className="materials">
				<Material />
				<Material />
				<Material />
				<Material />
				<Material />
				<Material />
			</div>
		</div>
	);
};

export default CourseMaterials;
