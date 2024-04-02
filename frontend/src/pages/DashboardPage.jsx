import MyCourses from "../components/MyCourses";
import SearchBar from "../components/SearchBar";

const DashboardPage = () => {
	return (
		<div className="dashboardpage">
			<div className="container">
				<SearchBar />
				<MyCourses />
			</div>
		</div>
	);
};

export default DashboardPage;
