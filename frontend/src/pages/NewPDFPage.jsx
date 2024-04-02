import { BsFilePdfFill } from "react-icons/bs";
import { IoCloudUpload } from "react-icons/io5";
import { MdOutlineTitle } from "react-icons/md";

const NewPDFPage = () => {
	return (
		<div className="newPDFpage">
			<div className="container">
				<section>
					<h4>
						<span className="text-primary">Share</span> knowledge,
					</h4>
					<h3>
						Upload, <span className="text-primary">PDF</span> here!
					</h3>
				</section>
				<form>
					<h4>CSC1101</h4>
					<small>
						<span className="text-opacity">
							Upload new material for
						</span>{" "}
						<strong>CSC1101</strong>
					</small>
					<div>
						<label htmlFor="title">PDF title</label>
						<input
							type="text"
							placeholder="Python & its properties"
							id="title"
						/>
						<MdOutlineTitle />
					</div>
					<div>
						<label htmlFor="choosePDF">Choose PDF</label>
						<input
							type="email"
							placeholder="Grab and drop the PDF file here or click to browse"
							id="choosePDF"
						/>
						<BsFilePdfFill />
					</div>
					<button className="btn btn-white">
						Upload
						<IoCloudUpload />
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewPDFPage;
