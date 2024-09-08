import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
	return (
		<div className="flex flex-col justify-center items-start py-30 text-800 font-medium  p-32">
			<h1 className=" text-5xl font-bold text-gray-800 mb-10">404 - Page Not Found</h1>
			<p>Sorry, the page you're looking for doesn't exist.</p>
			<Link
				to="/"
				replace
				className=" text-sky-500 hover:underline hover:underline-offset-2 decoration-2  "
			>
				Go back Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
