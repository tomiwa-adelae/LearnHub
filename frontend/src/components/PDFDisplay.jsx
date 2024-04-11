import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { IoCloseCircle } from "react-icons/io5";

const PDFDisplay = ({ pdfFile, closeModal }) => {
	const [numPages, setNumPages] = useState();

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();

				// 👇️ your logic here
				closeModal();
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, [closeModal]);

	return (
		<div className="pdf-display">
			<div className="wrapper">
				<button
					onClick={() => closeModal()}
					className="btn btn-primary"
				>
					<IoCloseCircle /> Close modal
				</button>
				<Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
					{Array.apply(null, Array(numPages))
						.map((x, i) => i + 1)
						.map((page) => {
							return (
								<Page
									pageNumber={page}
									renderTextLayer={false}
									renderAnnotationLayer={false}
									key={page}
								/>
							);
						})}
				</Document>
			</div>
		</div>
	);
};

export default PDFDisplay;
