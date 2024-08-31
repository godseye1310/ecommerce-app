import React, { useContext, useState } from 'react';

export const Display = React.createContext();

export const CartDisplay = ({ children }) => {
	const [cartDisplay, setCartDisplay] = useState(false);
	const handleCartDisplay = (show) => {
		setCartDisplay(show);
	};
	const ctx = { handleCartDisplay, cartDisplay };

	return <Display.Provider value={ctx}>{children}</Display.Provider>;
};

const useCartDisplay = () => useContext(Display);

export default useCartDisplay;
