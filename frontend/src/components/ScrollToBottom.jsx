import React, { useEffect, useRef } from "react";

const ScrollToBottom = () => {
	const divRef = useRef(null);

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: "smooth" });
	});

	return <div ref={divRef} />;
};

export default ScrollToBottom;
