import CourseHead from "../components/CourseHead";
import CourseMaterials from "../components/CourseMaterials";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastErrorMessage } from "../components/ToastMessage";
import { useLecturerCourseDetailsMutation } from "../slices/lecturerCourseApiSlice";
import { getLecturerCourseById } from "../slices/lecturerCourseSlice";
import { LargeLoader } from "../components/Loader";
import { useAllPDFsByIdMutation } from "../slices/pdfApiSlice";
import { getPDFs } from "../slices/pdfSlice";

const CoursePage = () => {
	const { id } = useParams();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const { lecturerCourse } = useSelector((state) => state.lecturerCourse);
	const { pdfs } = useSelector((state) => state.pdf);

	const dispatch = useDispatch();

	const [lecturerCourseDetails, { isLoading }] =
		useLecturerCourseDetailsMutation();
	const [allPDFsById, { isLoading: loadingPdfs }] = useAllPDFsByIdMutation();

	useEffect(() => {
		async function fetchCourseDetails() {
			try {
				setShowAlertMessage(null);

				const res = await lecturerCourseDetails(id);
				dispatch(getLecturerCourseById(res.data));
			} catch (error) {
				setShowAlertMessage(error.data.message);
			}
		}

		fetchCourseDetails();

		async function fetchPDFsById() {
			try {
				setShowAlertMessage(null);

				const res = await allPDFsById(id);
				dispatch(getPDFs(res.data));
			} catch (error) {
				console.log(error);
				setShowAlertMessage(error.data.message);
			}
		}

		fetchPDFsById();
	}, []);

	return (
		<>
			<div className="coursepage">
				<div className="container">
					{isLoading ? (
						<LargeLoader />
					) : (
						lecturerCourse && (
							<>
								<CourseHead course={lecturerCourse} />
								<CourseMaterials
									course={lecturerCourse}
									pdfs={pdfs}
									userInfo={userInfo}
								/>
							</>
						)
					)}
				</div>
			</div>
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
			<Footer />
		</>
	);
};

export default CoursePage;
