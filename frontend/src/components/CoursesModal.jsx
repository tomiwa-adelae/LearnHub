import { IoCloseCircle, IoSendSharp } from "react-icons/io5";
import { MdPostAdd } from "react-icons/md";

const CoursesModal = ({ closeModal }) => {
	return (
		<div className="courses-modal">
			<div className="wrapper">
				<div className="head">
					<h4>All courses</h4>
					<button
						onClick={() => closeModal()}
						className="btn btn-primary"
					>
						<IoCloseCircle /> Close modal
					</button>
				</div>
				<p>
					Here are the courses at Learn
					<span className="text-opacity">Hub</span>
				</p>
				<form>
					<div>
						<input type="text" placeholder="Search courses..." />
					</div>
					<button className="btn btn-white btn-input">
						Search <IoSendSharp />
					</button>
				</form>

				<div className="courses">
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
					<div className="course">
						<div className="details">
							<h6>1.</h6>
							<h6>PHY1101:</h6>
							<h6>Introduction to Electronics</h6>
						</div>
						<button className="btn btn-white btn-small">
							<MdPostAdd /> Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoursesModal;
