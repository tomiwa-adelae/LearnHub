import React from "react";

const ToastErrorMessage = ({ message }) => {
	return (
		<div className="toast-error-message">
			<h6>{message}</h6>
		</div>
	);
};

const ToastSuccessMessage = ({ message }) => {
	return (
		<div className="toast-success-message">
			<h6>{message}</h6>
		</div>
	);
};

export { ToastErrorMessage, ToastSuccessMessage };
