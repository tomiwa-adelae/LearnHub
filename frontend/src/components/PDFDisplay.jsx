import { useState } from "react";
import { Document, Page } from "react-pdf";

import pdf from "../pdf.pdf";
import { IoCloseCircle } from "react-icons/io5";

const PDFDisplay = () => {
	const [numPages, setNumPages] = useState();

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<div className="pdf-display">
			<div className="wrapper">
				<button className="btn btn-primary">
					<IoCloseCircle /> Close modal
				</button>
				<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
					{Array.apply(null, Array(numPages))
						.map((x, i) => i + 1)
						.map((page) => {
							return (
								<Page
									pageNumber={page}
									renderTextLayer={false}
									renderAnnotationLayer={false}
								/>
							);
						})}
				</Document>
			</div>
		</div>
	);
};

export default PDFDisplay;
