import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFilePdfFill } from "react-icons/bs";
import { IoCloudUpload, IoBarcode, IoCreate } from "react-icons/io5";
import { MdOutlineNumbers, MdOutlineTitle } from "react-icons/md";
import { useNewCourseMutation } from "../slices/courseApiSlice";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { createCourse } from "../slices/courseSlice";
import { ToastSuccessMessage } from "../components/ToastMessage";

const NewCoursePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [courseCode, setCourseCode] = useState("");
	const [courseTitle, setCourseTitle] = useState("");
	const [courseUnit, setCourseUnit] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const [newCourse, { isLoading }] = useNewCourseMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setShowAlertMessage(null);

		try {
			const res = await newCourse({
				courseCode,
				courseTitle,
				courseUnit,
			}).unwrap();

			dispatch(createCourse(res));
			setShowAlertMessage(null);
			setShowSuccessMessage(res.message);
			navigate("/dashboard");
		} catch (error) {
			// console.log(error);
			setShowAlertMessage(error.data.message);
		}
	};

	return (
		<>
			<div className="newcoursepage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Share</span>{" "}
							knowledge,
						</h4>
						<h3>
							Build, <span className="text-primary">teach</span>{" "}
							inspire!
						</h3>
					</section>
					<form onSubmit={handleSubmit}>
						<h4>Create new course</h4>
						<small>
							<span className="text-opacity">
								Create a new course at
							</span>{" "}
							<strong>LearnHub</strong>
						</small>
						<div>
							<label htmlFor="code">Course code</label>
							<input
								type="text"
								placeholder="CSC1102"
								id="code"
								value={courseCode}
								onChange={(e) => setCourseCode(e.target.value)}
							/>
							<IoBarcode />
						</div>
						<div>
							<label htmlFor="title">Course title</label>
							<input
								type="text"
								placeholder="Introduction of Computer science ii"
								id="title"
								value={courseTitle}
								onChange={(e) => setCourseTitle(e.target.value)}
							/>
							<MdOutlineTitle />
						</div>
						<div>
							<label htmlFor="unit">Course unit</label>
							<select
								name="unit"
								id="unit"
								value={courseUnit}
								onChange={(e) => setCourseUnit(e.target.value)}
							>
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

						<button className="btn btn-white">
							Create
							<IoCreate />
						</button>
					</form>
				</div>
			</div>
			{showSuccessMessage && (
				<ToastSuccessMessage message={showSuccessMessage} />
			)}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
			<Footer />
		</>
	);
};

export default NewCoursePage;

// import { useEffect, useState } from "react";
// import { BsFilePdfFill } from "react-icons/bs";
// import { IoCloudUpload, IoBarcode, IoCreate } from "react-icons/io5";
// import { MdOutlineNumbers, MdOutlineTitle } from "react-icons/md";
// import {
// 	useNewCourseMutation,
// 	useUploadCoursePDFMutation,
// } from "../slices/courseApiSlice";
// import Footer from "../components/Footer";
// import axios from "axios";

// const NewCoursePage = () => {
// 	const [title, setTitle] = useState("");
// 	const [file, setFile] = useState("");
// 	const [allImage, setAllImage] = useState(null);
// 	const [pdfFile, setPdfFile] = useState(null);

// 	useEffect(() => {
// 		// getPdf();
// 	}, []);
// 	const getPdf = async () => {
// 		const result = await axios.get("http://localhost:5000/get-files");
// 		console.log(result.data.data);
// 		setAllImage(result.data.data);
// 	};
// 	const submitImage = async (e) => {
// 		e.preventDefault();
// 		const formData = new FormData();
// 		formData.append("title", title);
// 		formData.append("file", file);
// 		console.log(title, file);

// 		const result = await axios.post(
// 			"http://localhost:5000/upload-files",
// 			formData,
// 			{
// 				headers: { "Content-Type": "multipart/form-data" },
// 			}
// 		);
// 		console.log(result);
// 		if (result.data.status == "ok") {
// 			alert("Uploaded Successfully!!!");
// 			// getPdf();
// 		}
// 	};

// 	const showPdf = (pdf) => {
// 		// window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
// 		setPdfFile(`http://localhost:5000/files/${pdf}`);
// 	};

// 	return (
// 		<div className="App">
// 			<form className="formStyle" onSubmit={submitImage}>
// 				<h4>Upload Pdf in React</h4>
// 				<br />
// 				<input
// 					type="text"
// 					className="form-control"
// 					placeholder="Title"
// 					required
// 					onChange={(e) => setTitle(e.target.value)}
// 				/>
// 				<br />
// 				<input
// 					type="file"
// 					class="form-control"
// 					accept="application/pdf"
// 					required
// 					onChange={(e) => setFile(e.target.files[0])}
// 				/>
// 				<br />
// 				<button class="btn btn-primary" type="submit">
// 					Submit
// 				</button>
// 			</form>
// 			<div className="uploaded">
// 				<h4>Uploaded PDF:</h4>
// 				<div className="output-div">
// 					{allImage == null
// 						? ""
// 						: allImage.map((data) => {
// 								return (
// 									<div className="inner-div">
// 										<h6>Title: {data.title}</h6>
// 										<button
// 											className="btn btn-primary"
// 											onClick={() => showPdf(data.pdf)}
// 										>
// 											Show Pdf
// 										</button>
// 									</div>
// 								);
// 						  })}
// 				</div>
// 			</div>
// 			{/* <PdfComp pdfFile={pdfFile} /> */}
// 		</div>
// 	);
// };

// export default NewCoursePage;
