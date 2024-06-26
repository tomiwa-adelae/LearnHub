import { IoSendSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAllLecturerCoursesMutation } from "../slices/lecturerCourseApiSlice";
import { getStudentCourses } from "../slices/studentCourseSlice";
import { getLecturerCourses } from "../slices/lecturerCourseSlice";
import { ToastErrorMessage } from "./ToastMessage";
import { useAllStudentCoursesMutation } from "../slices/studentCourseApiSlice";

const SearchBar = () => {
	const [search, setSearch] = useState("");

	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.auth);
	const { studentCourses } = useSelector((state) => state.studentCourse);
	const { lecturerCourses } = useSelector((state) => state.lecturerCourse);

	const [showAlertMessage, setShowAlertMessage] = useState(null);

	const [allLecturerCourses] = useAllLecturerCoursesMutation();

	const [allStudentCourses] = useAllStudentCoursesMutation();

	useEffect(() => {
		if (!search) {
			if (userInfo.isLecturer) {
				async function fetchLecturerCourses() {
					try {
						setShowAlertMessage(null);
						const res = await allLecturerCourses();
						dispatch(getLecturerCourses(res.data));
					} catch (error) {
						setShowAlertMessage(error.data.message);
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
					}
				}

				fetchStudentCourses();
			}
		}
	}, [search]);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!search) {
			if (userInfo.isLecturer) {
				async function fetchLecturerCourses() {
					try {
						setShowAlertMessage(null);
						const res = await allLecturerCourses();
						dispatch(getLecturerCourses(res.data));
					} catch (error) {
						setShowAlertMessage(error.data.message);
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
					}
				}

				fetchStudentCourses();
			}
		} else {
			if (userInfo.isLecturer) {
				let filteredCourses = lecturerCourses.filter((e) =>
					Object.values(e)
						.map((e) => String(e).toLowerCase())
						.some((e) => e.includes(search.toLowerCase()))
				);
				dispatch(getLecturerCourses(filteredCourses));
			} else {
				let filteredCourses = studentCourses.filter((e) =>
					Object.values(e.courseId)
						.map((e) => String(e).toLowerCase())
						.some((e) => e.includes(search.toLowerCase()))
				);
				dispatch(getStudentCourses(filteredCourses));
			}
		}
	};

	return (
		<>
			<div className="search-bar">
				<form onSubmit={submitHandler}>
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
			</div>
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
		</>
	);
};

export default SearchBar;
