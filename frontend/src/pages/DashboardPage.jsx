import Footer from "../components/Footer";
import Meta from "../components/Meta";
import MyCourses from "../components/MyCourses";
import SearchBar from "../components/SearchBar";

const DashboardPage = () => {
	return (
		<>
			<Meta title="Dashboard | LearnHub" />
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
