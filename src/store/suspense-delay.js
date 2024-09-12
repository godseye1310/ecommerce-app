import React, { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SuspenseLoader from '../components/UI/SuspenseLoader';

const useRouteChangeDelay = (delay = 0) => {
	const [isDelayOver, setIsDelayOver] = useState(false);
	const location = useLocation();

	useEffect(() => {
		// Start showing loader when route changes
		setIsDelayOver(false);
		// Set a timer to delay
		const timer = setTimeout(() => {
			setIsDelayOver(true);
		}, delay);
		// Cleanup timer on route change or unmount
		return () => clearTimeout(timer);
	}, [location, delay]);

	return isDelayOver;
};

const SuspenseWithDelay = ({ children, delay = 2000 }) => {
	const isDelayOver = useRouteChangeDelay(delay);
	const [isComponentLoaded, setIsComponentLoaded] = useState(false);

	useEffect(() => {
		if (isDelayOver) {
			setIsComponentLoaded(true);
		}
	}, [isDelayOver]);

	return (
		<>
			{(!isDelayOver || !isComponentLoaded) && <SuspenseLoader />}
			{isDelayOver && children}
		</>
	);
};

export default SuspenseWithDelay;
