import { useEffect, useState } from "react";
import { BsFilePdfFill } from "react-icons/bs";
import { IoCloudUpload } from "react-icons/io5";
import { MdOutlineTitle } from "react-icons/md";
import axios from "axios";
import { BASE_URL, UPLOAD_URL } from "../slices/constants";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import { useParams, useNavigate } from "react-router-dom";
import { useCourseDetailsMutation } from "../slices/courseApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../slices/courseSlice";
import { SmallLoader, LargeLoader } from "../components/Loader";

const NewPDFPage = () => {
	const { id } = useParams();

	const [courseTitle, setCourseTitle] = useState("");
	const [coursePDF, setCoursePDF] = useState("");
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [uploadLoading, setUploadLoading] = useState(null);

	const { course } = useSelector((state) => state.course);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [courseDetails, { isLoading }] = useCourseDetailsMutation();

	useEffect(() => {
		async function fetchCourseDetails() {
			try {
				setShowAlertMessage(null);

				const res = await courseDetails(id);
				dispatch(getCourseById(res.data));
			} catch (error) {
				setShowAlertMessage(error.data.message);
			}
		}

		fetchCourseDetails();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!courseTitle || !coursePDF) {
			setShowAlertMessage("Please enter all fields!");
			setUploadLoading(false);
		} else {
			try {
				setUploadLoading(true);
				setShowAlertMessage(null);

				const formData = new FormData();

				formData.append("courseTitle", courseTitle);
				formData.append("coursePDF", coursePDF);

				const res = await axios.post(
					`${BASE_URL}${UPLOAD_URL}/${id}`,
					formData,
					{ withCredentials: true },
					{ headers: { "Content-Type": "multipart/form-data" } }
				);
				setShowSuccessMessage(res.data.message);
				setUploadLoading(false);
				setShowAlertMessage(null);
				navigate(`/course/${id}`);
			} catch (error) {
				setUploadLoading(false);
				setShowAlertMessage(error.response.data.message);
			}
		}
	};

	return (
		<>
			<div className="newPDFpage">
				{isLoading ? (
					<LargeLoader />
				) : (
					<div className="container">
						<section>
							<h4>
								<span className="text-primary">Share</span>{" "}
								knowledge,
							</h4>
							<h3>
								Upload,{" "}
								<span className="text-primary">PDF</span> here!
							</h3>
						</section>
						<form onSubmit={handleSubmit}>
							<h4>{course?.courseCode}</h4>
							<small>
								<span className="text-opacity">
									Upload new material for
								</span>{" "}
								<strong>{course?.courseCode}</strong>
							</small>

							<div>
								<label htmlFor="title">PDF title</label>
								<input
									type="text"
									placeholder="Python & its properties"
									id="title"
									value={courseTitle}
									onChange={(e) =>
										setCourseTitle(e.target.value)
									}
								/>
								<MdOutlineTitle />
							</div>
							<div>
								<label htmlFor="choosePDF">Choose PDF</label>
								<input
									type="file"
									placeholder="Grab and drop the PDF file here or click to browse"
									id="choosePDF"
									accept="application/pdf"
									onChange={(e) =>
										setCoursePDF(e.target.files[0])
									}
								/>
								<BsFilePdfFill />
							</div>
							<button className="btn btn-white">
								{uploadLoading ? (
									<SmallLoader />
								) : (
									<>
										Upload
										<IoCloudUpload />
									</>
								)}
							</button>
						</form>
					</div>
				)}
			</div>
			{showSuccessMessage && (
				<ToastSuccessMessage message={showSuccessMessage} />
			)}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</>
	);
};

export default NewPDFPage;
