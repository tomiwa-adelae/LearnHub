import { Link } from "react-router-dom";

const Course = () => {
	return (
		<Link to="/course">
			<div className="course">
				<h5>Phy1101</h5>

				<div>
					<h6>Course unit: 3</h6>
					<h6>Course lecture: Mr. O.A. Olatunji</h6>

					<h6>Last updated: 21st of March, 2024</h6>
				</div>
			</div>
		</Link>
	);
};

export default Course;
