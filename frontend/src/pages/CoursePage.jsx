import CourseHead from "../components/CourseHead";
import CourseMaterials from "../components/CourseMaterials";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastErrorMessage } from "../components/ToastMessage";
import { useCourseDetailsMutation } from "../slices/courseApiSlice";
import { getCourseById } from "../slices/courseSlice";
import { LargeLoader } from "../components/Loader";
import { useAllPDFsMutation } from "../slices/pdfApiSlice";
import { getPDFs } from "../slices/pdfSlice";

const CoursePage = () => {
	const { id } = useParams();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { course } = useSelector((state) => state.course);
	const { pdfs } = useSelector((state) => state.pdf);

	const dispatch = useDispatch();

	const [courseDetails, { isLoading }] = useCourseDetailsMutation();
	const [allPDFs, { isLoading: loadingPdfs }] = useAllPDFsMutation();

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

		async function fetchPDFs() {
			try {
				setShowAlertMessage(null);

				const res = await allPDFs(id);
				dispatch(getPDFs(res.data));
			} catch (error) {
				console.log(error);
				setShowAlertMessage(error.data.message);
			}
		}

		fetchPDFs();
	}, []);

	return (
		<>
			<div className="coursepage">
				<div className="container">
					{isLoading ? (
						<LargeLoader />
					) : (
						course && (
							<>
								<CourseHead course={course} />
								<CourseMaterials course={course} pdfs={pdfs} />
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
