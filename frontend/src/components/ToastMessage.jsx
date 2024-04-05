import React from "react";

const ToastSuccessMessage = ({ message }) => {
	return (
		<div className="toast-success-message">
			<h6>{message}</h6>
		</div>
	);
};

export { ToastSuccessMessage };
