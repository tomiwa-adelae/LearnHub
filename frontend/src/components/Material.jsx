import { BsFilePdfFill } from "react-icons/bs";
import { IoOpen, IoDownload } from "react-icons/io5";

const Material = () => {
	return (
		<div className="material">
			<BsFilePdfFill className="pdf-icon" />
			<h5>Aberration</h5>
			<h6>67 pages</h6>
			<h6>Uploaded on the 21st of March, 2024</h6>
			<div>
				<button className="btn btn-primary">
					<IoOpen /> View PDF
				</button>
				<div className="btn btn-secondary">
					<IoDownload /> Download PDF
				</div>
			</div>
		</div>
	);
};

export default Material;
