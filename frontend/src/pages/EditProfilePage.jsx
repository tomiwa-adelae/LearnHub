import { IoSave } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineNumbers } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { SmallLoader } from "../components/Loader";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import Meta from "../components/Meta";

const EditProfilePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [matricNumber, setMatricNumber] = useState("");
	const [department, setDepartment] = useState("");
	const [faculty, setFaculty] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const [updateUser, { isLoading }] = useUpdateUserMutation();

	useEffect(() => {
		if (userInfo) {
			setName(userInfo.name || "");
			setEmail(userInfo.email || "");
			setMatricNumber(userInfo.matricNumber || "");
			setDepartment(userInfo.department || "");
			setFaculty(userInfo.faculty || "");
		}
	}, [userInfo]);

	const submitHandler = async (e) => {
		e.preventDefault();

		setShowAlertMessage(null);

		try {
			const res = await updateUser({
				name,
				email,
				matricNumber,
				department,
				faculty,
			}).unwrap();
			dispatch(setCredentials({ ...res }));

			setShowSuccessMessage("Profile updated successfully!");

			setTimeout(() => {
				navigate("/profile");
			}, 3000);
		} catch (error) {
			setShowAlertMessage(error.data.message);
		}
	};

	return (
		<>
			<Meta title="Edit profile | LearnHub" />
			<div className="editprofilepage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Persona</span>
							lization
						</h4>
						<h3>
							Update your{" "}
							<span className="text-primary">information</span>
						</h3>
					</section>
					<form onSubmit={submitHandler}>
						<h4>Edit profile</h4>
						<div>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								placeholder="John Doe"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<FaCircleUser />
						</div>
						<div>
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								placeholder="johndoe@gmail.com"
								id="email"
								value={email}
								readOnly={true}
								disabled
							/>
							<MdEmail />
						</div>
						<div>
							<label htmlFor="matricNumber">
								Matriculation/Admission number
							</label>
							<input
								type="text"
								placeholder="20J03001"
								id="matricNumber"
								value={matricNumber}
								readOnly={true}
								disabled
							/>
							<MdOutlineNumbers />
						</div>
						<div>
							<label htmlFor="department">Department</label>
							<select
								name="department"
								id="department"
								value={department}
								onChange={(e) => setDepartment(e.target.value)}
							>
								<option value="">Select department</option>
								<option value="Accounting & Finance">
									Accounting & Finance
								</option>
								<option value="Agricultural economics">
									Agricultural economics
								</option>
								<option value="Architecture">
									Architecture
								</option>
								<option value="Banking & Finance">
									Banking & Finance
								</option>
								<option value="Biochemistry">
									Biochemistry
								</option>
								<option value="Business Administration">
									Business Administration
								</option>
								<option value="Civil Engineering">
									Civil Engineering
								</option>
								<option value="Computer Engineering">
									Computer Engineering
								</option>
								<option value="Computer Science">
									Computer Science
								</option>
								<option value="Computer Science(ICT Option)">
									Computer Science(ICT Option)
								</option>
								<option value="Crop & Animal Science">
									Crop & Animal Science
								</option>
								<option value="Economics">Economics</option>
								<option value="Electrical Engineering">
									Electrical Engineering
								</option>
								<option value="English">English</option>
								<option value="Entrepreneurship studies">
									Entrepreneurship studies
								</option>
								<option value="Environmental Health Science">
									Environmental Health Science
								</option>
								<option value="Estate Management">
									Estate Management
								</option>
								<option value="Geo-Informatics">
									Geo-Informatics
								</option>
								<option value="Geology">Geology</option>
								<option value="History">History</option>
								<option value="Industrial Chemistry">
									Industrial Chemistry
								</option>
								<option value="Industrial Relations & Personnel Management">
									Industrial Relations & Personnel Management
								</option>
								<option value="International Studies">
									International Studies
								</option>
								<option value="Law">Law</option>
								<option value="Library & Information Science">
									Library & Information Science
								</option>
								<option value="Mass Communication">
									Mass Communication
								</option>
								<option value="Mathematics">Mathematics</option>
								<option value="Mechanical Engineering">
									Mechanical Engineering
								</option>
								<option value="Medical Lab Science">
									Medical Lab Science
								</option>
								<option value="Microbiology">
									Microbiology
								</option>
								<option value="Nursing">Nursing</option>
								<option value="Peace Studies & Conflict Resolution">
									Peace Studies & Conflict Resolution
								</option>
								<option value="Performing Arts & Musics">
									Performing Arts & Musics
								</option>
								<option value="Physics">Physics</option>
								<option value="Political Science">
									Political Science
								</option>
								<option value="Radiography & Radiation Science">
									Radiography & Radiation Science
								</option>
								<option value="Radiography & Radiation Science">
									Radiography & Radiation Science
								</option>
								<option value="Religious Studies">
									Religious Studies
								</option>
								<option value="Statistics">Statistics</option>
								<option value="Surveying">Surveying</option>
							</select>
							<FcDepartment />
						</div>
						<div>
							<label htmlFor="faculty">Faculty</label>
							<select
								name="faculty"
								id="faculty"
								value={faculty}
								onChange={(e) => setFaculty(e.target.value)}
							>
								<option value="">Select faculty</option>
								<option value="Agriculture">Agriculture</option>
								<option value="Basic Medical Science">
									Basic Medical Science
								</option>
								<option value="Communication & Media Studies">
									Communication & Media Studies
								</option>
								<option value="Education">Education</option>
								<option value="Environmental Science">
									Environmental Science
								</option>
								<option value="Humanities">Humanities</option>
								<option value="Law">Law</option>
								<option value="Management Science">
									Management Science
								</option>
								<option value="Natural Science">
									Natural Science
								</option>
								<option value="Peace Studies & Conflict Resolution">
									Peace Studies & Conflict Resolution
								</option>
								<option value="Social Science">
									Social Science
								</option>
							</select>
							<FcDepartment />
						</div>
						<button className="btn btn-white">
							{isLoading ? (
								<SmallLoader />
							) : (
								<>
									Save changes
									<IoSave />
								</>
							)}
						</button>
					</form>
				</div>
			</div>
			{showSuccessMessage && (
				<ToastSuccessMessage message={showSuccessMessage} />
			)}
			{showAlertMessage && (
				<ToastErrorMessage message={showAlertMessage} />
			)}
			<Footer />
		</>
	);
};

export default EditProfilePage;
