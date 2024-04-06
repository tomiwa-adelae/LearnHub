import React from "react";

const SmallLoader = () => {
	return (
		<div className="loader">
			<div className="small-loader"></div>
		</div>
	);
};

const LargeLoader = () => {
	return (
		<div className="loader">
			<div className="large-loader"></div>
		</div>
	);
};

export { SmallLoader, LargeLoader };
