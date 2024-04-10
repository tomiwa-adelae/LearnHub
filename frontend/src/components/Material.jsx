import { BsFilePdfFill } from "react-icons/bs";
import { IoOpen, IoDownload } from "react-icons/io5";
import PDFDisplay from "./PDFDisplay";
import { useState } from "react";
import { BASE_URL } from "../slices/constants";

const Material = ({ pdfObject }) => {
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
			<>
				<BsFilePdfFill className="pdf-icon" />
				<h5>{pdfObject.pdfTitle}</h5>

				<div className="btns">
					<button
						onClick={() => showPdf(pdfObject.pdfMaterial)}
						className="btn btn-primary"
					>
						<IoOpen /> View PDF
					</button>
					<a
						href={`${BASE_URL}/uploads/${pdfObject.pdfMaterial}`}
						color="transparent"
						target="_blank"
						download
						className="btn btn-secondary"
					>
						<IoDownload /> Download PDF
					</a>
				</div>
			</>
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
