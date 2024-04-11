import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFilePdfFill } from "react-icons/bs";
import { IoCloudUpload, IoBarcode, IoCreate } from "react-icons/io5";
import { MdOutlineNumbers, MdOutlineTitle } from "react-icons/md";
import { useNewLecturerCourseMutation } from "../slices/lecturerCourseApiSlice";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { createLecturerCourse } from "../slices/lecturerCourseSlice";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import { SmallLoader } from "../components/Loader";

const NewCoursePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [courseCode, setCourseCode] = useState("");
	const [courseTitle, setCourseTitle] = useState("");
	const [courseUnit, setCourseUnit] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const [newLecturerCourse, { isLoading }] = useNewLecturerCourseMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setShowAlertMessage(null);

		try {
			const res = await newLecturerCourse({
				courseCode,
				courseTitle,
				courseUnit,
			}).unwrap();

			dispatch(createLecturerCourse(res));
			setShowAlertMessage(null);
			setShowSuccessMessage(res.message);
			navigate("/dashboard");
		} catch (error) {
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
							{isLoading ? (
								<SmallLoader />
							) : (
								<>
									Create
									<IoCreate />
								</>
							)}
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
