import { IoSave } from "react-icons/io5";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useChangeUserImageMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useDropzone } from "react-dropzone";
import { SmallLoader } from "../components/Loader";
import {
	ToastErrorMessage,
	ToastSuccessMessage,
} from "../components/ToastMessage";
import Meta from "../components/Meta";
import { CiImageOn } from "react-icons/ci";

const ChangeProfilePicturePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [profilePicture, setProfilePicture] = useState("");
	const [showAlertMessage, setShowAlertMessage] = useState(null);
	const [showSuccessMessage, setShowSuccessMessage] = useState(null);

	const { userInfo } = useSelector((state) => state.auth);

	const [changeUserImage, { isLoading }] = useChangeUserImageMutation();

	const onDrop = useCallback(
		(acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				const reader = new FileReader();

				reader.readAsDataURL(file);
				reader.onload = async () => {
					const binaryStr = reader.result;

					setProfilePicture(binaryStr);
					try {
						const res = await changeUserImage({
							profilePicture,
						}).unwrap();
						dispatch(setCredentials({ ...res }));

						setShowSuccessMessage("Image updated successfully!");

						setTimeout(() => {
							navigate("/profile");
						}, 3000);
					} catch (error) {
						// setShowAlertMessage(error.data.message);
						console.log(error);
					}
				};
			});
		},
		[changeUserImage, dispatch, navigate, profilePicture]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
	});

	const submitHandler = async (e) => {
		e.preventDefault();

		setShowAlertMessage(null);

		if (!profilePicture) return;

		try {
			const res = await changeUserImage({
				profilePicture,
			}).unwrap();
			dispatch(setCredentials({ ...res }));

			setShowSuccessMessage("Image updated successfully!");

			setTimeout(() => {
				navigate("/profile");
			}, 3000);
		} catch (error) {
			// setShowAlertMessage(error.data.message);
			console.log(error);
		}
	};

	return (
		<>
			<Meta title="Change profile picture | LearnHub" />
			<div className="changeprofilepicturepage">
				<div className="container">
					<section>
						<h4>
							<span className="text-primary">Persona</span>
							lization
						</h4>
						<h3>
							Update your{" "}
							<span className="text-primary">
								profile picture
							</span>
						</h3>
					</section>
					<form onSubmit={submitHandler}>
						<h4>Change profile picture</h4>
						<div>
							<label htmlFor="image">Profile picture</label>
							<div
								{...getRootProps()}
								className={
									isDragActive
										? "modal-active"
										: "upload-modal"
								}
							>
								<div>
									<input
										id="productImage"
										{...getInputProps()}
									/>
								</div>

								<small>
									Drap and drop or click to browse a file
								</small>
							</div>
							{/* <input
								type="file"
								placeholder="Profile picture"
								id="image"
								value={profilePicture}
								onChange={(e) =>
									setProfilePicture(e.target.value)
								}
							/> */}
							<CiImageOn />
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

export default ChangeProfilePicturePage;
