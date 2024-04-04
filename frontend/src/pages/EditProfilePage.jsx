import { IoSave } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineNumbers } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import Footer from "../components/Footer";

const EditProfilePage = () => {
	return (
		<>
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
					<form>
						<h4>Edit profile</h4>
						<div>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								placeholder="John Doe"
								id="name"
							/>
							<FaCircleUser />
						</div>
						<div>
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								placeholder="johndoe@gmail.com"
								id="email"
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
							/>
							<MdOutlineNumbers />
						</div>
						<div>
							<label htmlFor="department">Department</label>
							<select name="department" id="department">
								<option value="">Select department</option>
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
							</select>
							<FcDepartment />
						</div>
						<div>
							<label htmlFor="faculty">Faculty</label>
							<select name="faculty" id="faculty">
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
							</select>
							<FcDepartment />
						</div>
						<button className="btn btn-white">
							Save changes
							<IoSave />
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default EditProfilePage;
