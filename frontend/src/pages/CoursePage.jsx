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

const CoursePage = () => {
	const { id } = useParams();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { course } = useSelector((state) => state.course);

	const dispatch = useDispatch();

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
								<CourseMaterials course={course} />
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
