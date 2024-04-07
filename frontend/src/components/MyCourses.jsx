import { MdPostAdd } from "react-icons/md";
import Course from "./Course";
import CoursesModal from "./CoursesModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAllCoursesMutation } from "../slices/courseApiSlice";
import { getCourses } from "../slices/courseSlice";
import { LargeLoader } from "./Loader";

const MyCourses = () => {
	const [showModal, setShowModal] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

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
			<div className="my-courses">
				<div className="head">
					<h4 className="text-primary">My Courses</h4>
					{userInfo.isLecturer ? (
						<>
							<Link
								to="/new-course"
								onClick={(e) => setShowModal(!showModal)}
								className="btn btn-primary"
							>
								<MdPostAdd /> New courses
							</Link>
						</>
					) : (
						<>
							<button
								onClick={(e) => setShowModal(!showModal)}
								className="btn btn-primary"
							>
								<MdPostAdd /> Add courses
							</button>
						</>
					)}
				</div>

				{isLoading ? (
					<LargeLoader />
				) : courses.length === 0 ? (
					<h6>You have not selected any courses yet! Select now</h6>
				) : (
					<div className="courses">
						{courses.map((course) => (
							<Course key={course._id} course={course} />
						))}
					</div>
				)}
			</div>
			{showModal && (
				<CoursesModal closeModal={() => setShowModal(!showModal)} />
			)}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</>
	);
};

export default MyCourses;
