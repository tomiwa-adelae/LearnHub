import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/style.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
			</Routes>
			<Footer />
			<div className="ball ball-md"></div>
			<div className="ball ball-lg"></div>
			<div className="ball ball-2xl"></div>
			<div className="ball ball-sm"></div>
		</>
	);
}

export default App;
