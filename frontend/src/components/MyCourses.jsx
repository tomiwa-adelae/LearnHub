import { MdPostAdd } from "react-icons/md";
import Course from "./Course";
import CoursesModal from "./CoursesModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAllLecturerCoursesMutation } from "../slices/lecturerCourseApiSlice";
import { getLecturerCourses } from "../slices/lecturerCourseSlice";
import { LargeLoader } from "./Loader";
import { ToastErrorMessage } from "../components/ToastMessage";
import { getStudentCourses } from "../slices/studentCourseSlice";
import { useAllStudentCoursesMutation } from "../slices/studentCourseApiSlice";
import CourseSkeleton from "./CourseSkeleton";

const MyCourses = () => {
	const [showModal, setShowModal] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const { lecturerCourses } = useSelector((state) => state.lecturerCourse);
	const { studentCourses } = useSelector((state) => state.studentCourse);

	const [allLecturerCourses, { isLoading }] = useAllLecturerCoursesMutation();
	const [allStudentCourses, { isLoading: loadingStudent }] =
		useAllStudentCoursesMutation();

	useEffect(() => {
		if (userInfo.isLecturer) {
			async function fetchLecturerCourses() {
				try {
					setShowAlertMessage(null);
					const res = await allLecturerCourses();
					dispatch(getLecturerCourses(res.data));
				} catch (error) {
					setShowAlertMessage(error.data.message);
					console.log(error);
				}
			}

			fetchLecturerCourses();
		} else {
			async function fetchStudentCourses() {
				try {
					setShowAlertMessage(null);
					const res = await allStudentCourses();
					dispatch(getStudentCourses(res.data));
				} catch (error) {
					setShowAlertMessage(error.data.message);
					console.log(error);
				}
			}

			fetchStudentCourses();
		}
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
								New courses
								<MdPostAdd />
							</Link>
						</>
					) : (
						<>
							<button
								onClick={(e) => setShowModal(!showModal)}
								className="btn btn-primary"
							>
								Add courses
								<MdPostAdd />
							</button>
						</>
					)}
				</div>

				{userInfo.isLecturer && !isLoading && (
					<div className="courses">
						{lecturerCourses.map((course) => (
							<Course key={course._id} course={course} />
						))}
					</div>
				)}

				{userInfo.isLecturer &&
					!isLoading &&
					lecturerCourses.length === 0 && (
						<h6>
							You haven't made any courses yet. Please create one
							now.
						</h6>
					)}

				{userInfo.isLecturer && isLoading && (
					<div className="skeleton-wrapper">
						<CourseSkeleton />
						<CourseSkeleton />
						<CourseSkeleton />
					</div>
				)}
				{/* Student */}
				{!userInfo.isLecturer && !loadingStudent && (
					<div className="courses">
						{studentCourses.map((course) => (
							<Course key={course._id} course={course.courseId} />
						))}
					</div>
				)}

				{!userInfo.isLecturer &&
					!loadingStudent &&
					studentCourses.length === 0 && (
						<h6>
							You have not selected any courses yet! Select now
						</h6>
					)}

				{!userInfo.isLecturer && loadingStudent && (
					<div className="skeleton-wrapper">
						<CourseSkeleton />
						<CourseSkeleton />
						<CourseSkeleton />
					</div>
				)}
			</div>
			{showModal && (
				<CoursesModal
					closeModal={async () => {
						setShowModal(!showModal);

						try {
							setShowAlertMessage(null);
							const res = await allStudentCourses(userInfo._id);
							dispatch(getStudentCourses(res.data));
						} catch (error) {
							setShowAlertMessage(error.data.message);
							console.log(error);
						}
					}}
				/>
			)}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</>
	);
};

export default MyCourses;
