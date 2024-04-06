import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MyCourses from "../components/MyCourses";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useAllCoursesMutation } from "../slices/courseApiSlice";
import { getCourses } from "../slices/courseSlice";
import { ToastErrorMessage } from "../components/ToastMessage";

const DashboardPage = () => {
	const dispatch = useDispatch();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { courses } = useSelector((state) => state.course);

	const [allCourses, { isLoading }] = useAllCoursesMutation();

	useEffect(() => {
		async function fetchCourses() {
			try {
				setShowAlertMessage(null);
				const res = await allCourses();
				dispatch(getCourses(res.data));
			} catch (error) {
				setShowAlertMessage(error.data.message);
				console.log(error);
			}
		}

		fetchCourses();
	}, []);

	return (
		<>
			<div className="dashboardpage">
				<div className="container">
					<SearchBar />
					<MyCourses courses={courses} />
				</div>
			</div>
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
			<Footer />
		</>
	);
};

export default DashboardPage;
