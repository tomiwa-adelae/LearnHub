import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/style.css";

import { pdfjs } from "react-pdf";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import RegisterLecturerPage from "./pages/RegisterLecturerPage";
import NewPDFPage from "./pages/NewPDFPage";
import NewCoursePage from "./pages/NewCoursePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import VerifyCodePage from "./pages/VerifyCodePage";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ChatPage from "./pages/ChatPage";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route
					path="/register-lecturer"
					element={<RegisterLecturerPage />}
				/>
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/course" element={<CoursePage />} />
				<Route path="/new-pdf" element={<NewPDFPage />} />
				<Route path="/new-course" element={<NewCoursePage />} />
				<Route path="/reset-password" element={<ResetPasswordPage />} />
				<Route path="/verify-code" element={<VerifyCodePage />} />
				<Route
					path="/update-password"
					element={<UpdatePasswordPage />}
				/>
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/edit-profile" element={<EditProfilePage />} />
				<Route
					path="/change-password"
					element={<ChangePasswordPage />}
				/>
				<Route path="/chat" element={<ChatPage />} />
			</Routes>
			{/* <Footer /> */}
			<div className="ball ball-md"></div>
			<div className="ball ball-lg"></div>
			<div className="ball ball-2xl"></div>
			<div className="ball ball-sm"></div>
		</>
	);
}

export default App;
