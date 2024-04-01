import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/style.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</>
	);
}

export default App;
