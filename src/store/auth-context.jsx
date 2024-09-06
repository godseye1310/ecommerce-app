import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('token') || null);
	const [cartMail, setCartMail] = useState(localStorage.getItem('email') || '');

	const isLoggedIn = !!token;

	const loginHandler = (token, mail) => {
		setToken(token);
		localStorage.setItem('token', token);

		setCartMail(mail);
		localStorage.setItem('cartMail', mail);
	};

	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem('token');

		setCartMail('');
		localStorage.removeItem('cartMail');
	};
	useEffect(() => {
		localStorage.getItem('token');
	});

	const ContextValue = {
		token,
		isLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
		cartMail,
	};
	// console.log(token);

	return <AuthContext.Provider value={ContextValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
