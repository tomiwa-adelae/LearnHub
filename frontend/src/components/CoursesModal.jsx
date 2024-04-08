import { useEffect, useState } from "react";
import { IoCloseCircle, IoSendSharp } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import {
	createStudentCourse,
	getCoursesAvailable,
	getStudentCourses,
} from "../slices/studentCourseSlice";
import {
	useAllCoursesAvailableMutation,
	useAllStudentCoursesMutation,
	useNewStudentCourseMutation,
} from "../slices/studentCourseApiSlice";
import { BASE_URL, STUDENT_COURSES_URL } from "../slices/constants";
import axios from "axios";
import { LargeLoader, SmallLoader } from "./Loader";

const CoursesModal = ({ closeModal }) => {
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.auth);

	const [search, setSearch] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [addLoading, setAddLoading] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const { availableCourses } = useSelector((state) => state.studentCourse);

	const { studentCourses } = useSelector((state) => state.studentCourse);

	const [allCoursesAvailable, { isLoading }] =
		useAllCoursesAvailableMutation();
	const [newStudentCourse, { isLoading: loadingStudentCreate }] =
		useNewStudentCourseMutation();

	const [allStudentCourses, { isLoading: loadingStudent }] =
		useAllStudentCoursesMutation();

	useEffect(() => {
		async function fetchAllCourses() {
			try {
				setShowAlertMessage(null);

				const res = await allCoursesAvailable();

				const filteredCourses = res.data.filter((ac) =>
					studentCourses.every((sc) => sc.courseId._id !== ac._id)
				);

				dispatch(getCoursesAvailable(filteredCourses));
			} catch (error) {
				setShowAlertMessage(error.data.message);
				console.log(error);
			}
		}

		async function fetchStudentCourses() {
			try {
				setShowAlertMessage(null);
				const res = await allStudentCourses(userInfo._id);
				dispatch(getStudentCourses(res.data));
			} catch (error) {
				setShowAlertMessage(error.data.message);
				console.log(error);
			}
		}

		fetchStudentCourses();

		fetchAllCourses();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setShowAlertMessage(null);

		const res = await allCoursesAvailable(search);

		const filteredCourses = res.data.filter((ac) =>
			studentCourses.every((sc) => sc.courseId._id !== ac._id)
		);

		dispatch(getCoursesAvailable(filteredCourses));
	};

	const addCourse = async (id) => {
		try {
			setShowSuccessMessage(null);
			setShowAlertMessage(null);
			setAddLoading(true);

			const res = await axios.post(
				`${BASE_URL}${STUDENT_COURSES_URL}`,
				{ id },
				{ withCredentials: true }
			);

			setShowSuccessMessage(res.data.message);
			setAddLoading(null);
			closeModal();
		} catch (error) {
			setShowAlertMessage(error.data.message);
			setAddLoading(null);
			console.log(error);
		}
	};

	return (
		<>
			<div className="courses-modal">
				<div className="wrapper">
					<div className="head">
						<h4>All courses</h4>
						<button
							onClick={() => closeModal()}
							className="btn btn-primary"
						>
							<IoCloseCircle /> Close modal
						</button>
					</div>
					<p>
						Here are the courses at Learn
						<span className="text-opacity">Hub</span>
					</p>
					<form onSubmit={handleSubmit}>
						<div>
							<input
								type="text"
								placeholder="Search courses..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
							/>
						</div>
						<button className="btn btn-white btn-input">
							Search <IoSendSharp />
						</button>
					</form>

					<div className="courses">
						{isLoading ? (
							<LargeLoader />
						) : availableCourses.length === 0 ? (
							<h6>
								There are no additional courses available for
								selection.
							</h6>
						) : (
							availableCourses.map((course, index) => (
								<div
									style={{
										backgroundColor: `${course.courseColor}`,
									}}
									key={course._id}
									className="course"
								>
									<div className="details">
										<h6>{index + 1}.</h6>
										<h6>{course.courseCode}:</h6>
										<h6>{course.courseTitle}</h6>
									</div>
									<button
										onClick={() => addCourse(course._id)}
										className="btn btn-white btn-small"
									>
										{addLoading ? (
											<SmallLoader />
										) : (
											<>
												<MdPostAdd /> Add
											</>
										)}
									</button>
								</div>
							))
						)}
					</div>
				</div>
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

export default CoursesModal;
