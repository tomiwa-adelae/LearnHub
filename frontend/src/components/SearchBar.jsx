import { IoSendSharp } from "react-icons/io5";
import SearchableCourses from "./SearchableCourses";

const SearchBar = () => {
	return (
		<div className="search-bar">
			<form>
				<div>
					<input type="text" placeholder="Search courses..." />
				</div>
				<button className="btn btn-white btn-input">
					Search <IoSendSharp />
				</button>
			</form>
			{/* <SearchableCourses /> */}
		</div>
	);
};

export default SearchBar;
