import { FaCircleUser } from "react-icons/fa6";

const Message = () => {
	return (
		<div className="message">
			<FaCircleUser className="user-icon" />
			<div className="chat-details">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
					doloremque aut ad odit, atque quia sit consequatur ipsum
					minima dolor porro? Fugiat quis accusamus libero fuga facere
					aspernatur sapiente vero.
				</p>
				<small>12:90</small>
			</div>
		</div>
	);
};

export default Message;
