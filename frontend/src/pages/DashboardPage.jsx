import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MyCourses from "../components/MyCourses";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useAllCoursesMutation } from "../slices/courseApiSlice";
import { getCourses } from "../slices/courseSlice";
import { ToastErrorMessage } from "../components/ToastMessage";
import { LargeLoader } from "../components/Loader";

const DashboardPage = () => {
	return (
		<>
			<div className="dashboardpage">
				<div className="container">
					<SearchBar />

					<MyCourses />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default DashboardPage;
