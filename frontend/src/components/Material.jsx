import { BsFilePdfFill } from "react-icons/bs";
import { IoOpen, IoDownload } from "react-icons/io5";
import PDFDisplay from "./PDFDisplay";
import { useState } from "react";
import { BASE_URL } from "../slices/constants";

const Material = (pdf) => {
	const [pdfFile, setPdfFile] = useState(null);

	const showPdf = (pdf) => {
		// window.open(
		// 	`http://localhost:5000/uploads/${pdf}`,
		// 	"_blank",
		// 	"noreferrer"
		// );
		setPdfFile(`${BASE_URL}/uploads/${pdf}`);
	};

	return (
		<>
			<div className="material">
				<BsFilePdfFill className="pdf-icon" />
				<h5>{pdf.pdf.courseTitle}</h5>
				<h6>67 pages</h6>
				<h6>Uploaded on the 21st of March, 2024</h6>
				<div>
					<button
						onClick={() => showPdf(pdf.pdf.coursePDF)}
						className="btn btn-primary"
					>
						<IoOpen /> View PDF
					</button>
					<div className="btn btn-secondary">
						<IoDownload /> Download PDF
					</div>
				</div>
			</div>
			{pdfFile && (
				<PDFDisplay
					pdfFile={pdfFile}
					closeModal={() => setPdfFile(null)}
				/>
			)}
		</>
	);
};

export default Material;
