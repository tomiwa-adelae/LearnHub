import { useEffect } from "react";
import Footer from "../components/Footer";
import MyCourses from "../components/MyCourses";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardPage = () => {
	const navigate = useNavigate();
	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (!userInfo) {
			navigate("/login");
		}
	}, [userInfo]);

	return (
		<>
			<div className="dashboardpage">
				<div className="container">
					<SearchBar />
					<MyCourses />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default DashboardPage;
