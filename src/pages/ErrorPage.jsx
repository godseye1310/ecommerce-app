import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="flex flex-col justify-center items-start py-30 text-gray-800 font-medium  p-32">
			<h1 className="text-3xl font-semibold text-gray-800 mb-5">Oops! Something went wrong...</h1>
			<p>
				Try Again Later or{' '}
				<span>
					<Link
						to="/"
						replace
						className="text-sky-500 hover:underline hover:underline-offset-2 decoration-2"
					>
						go to home
					</Link>
				</span>
			</p>
			<p>
				{error.statusText} <br /> {error.message}
			</p>
		</div>
	);
};

export default ErrorPage;
