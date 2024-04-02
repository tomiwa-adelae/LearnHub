import { BsFilePdfFill } from "react-icons/bs";
import { IoCloudUpload, IoBarcode, IoCreate } from "react-icons/io5";
import { MdOutlineNumbers, MdOutlineTitle } from "react-icons/md";

const NewCoursePage = () => {
	return (
		<div className="newcoursepage">
			<div className="container">
				<section>
					<h4>
						<span className="text-primary">Share</span> knowledge,
					</h4>
					<h3>
						Build, <span className="text-primary">teach</span>{" "}
						inspire!
					</h3>
				</section>
				<form>
					<h4>Create new course</h4>
					<small>
						<span className="text-opacity">
							Create a new course at
						</span>{" "}
						<strong>LearnHub</strong>
					</small>
					<div>
						<label htmlFor="code">Course code</label>
						<input type="text" placeholder="CSC1102" id="code" />
						<IoBarcode />
					</div>
					<div>
						<label htmlFor="title">Course title</label>
						<input
							type="text"
							placeholder="Introduction of Computer science ii"
							id="title"
						/>
						<MdOutlineTitle />
					</div>
					<div>
						<label htmlFor="unit">Course unit</label>
						<select name="unit" id="unit">
							<option value="">Select unit</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="11">11</option>
						</select>
						<MdOutlineNumbers />
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
						Create
						<IoCreate />
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewCoursePage;
