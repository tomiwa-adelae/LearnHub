import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keyword" content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: "LearnHub",
	description:
		"LearnHub is where learning meets collaboration. Join us to share knowledge, connect with others, and grow together. Welcome to LearnHub, your gateway to collaborative learning.",
	keywords:
		"learning, education, learnhub, knowledge, collaborative learning",
};

export default Meta;
