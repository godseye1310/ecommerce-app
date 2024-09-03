import React, { useContext, useState } from 'react';
// import { useLocation } from 'react-router-dom';

export const Display = React.createContext();

export const CartDisplayProvider = ({ children }) => {
	const [cartDisplay, setCartDisplay] = useState(false);
	const handleCartDisplay = (show) => {
		setCartDisplay(show);
	};

	//The best way to close cart whenever the route as whenever the route changes instead of writing a useEffect to close cart on unmount in both products and productDetails component//
	// const location = useLocation();
	// React.useEffect(() => {
	// 	setCartDisplay(false);
	// }, [location]);

	const ctx = { handleCartDisplay, cartDisplay };

	return <Display.Provider value={ctx}>{children}</Display.Provider>;
};

const useCartDisplay = () => useContext(Display);

export default useCartDisplay;
