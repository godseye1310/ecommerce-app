import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('token') || null);
	const [userMail, setUserMail] = useState(localStorage.getItem('userMail') || null);

	const isLoggedIn = !!token;

	const loginHandler = (token, email) => {
		setToken(token);
		localStorage.setItem('token', token);

		setUserMail(email);
		localStorage.setItem('userMail', email);
	};

	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem('token');
		localStorage.removeItem('userMail');
	};
	useEffect(() => {
		localStorage.getItem('token');
	}, []);

	const ContextValue = {
		token,
		isLoggedIn,
		userMail,
		login: loginHandler,
		logout: logoutHandler,
	};
	// console.log(token);

	return <AuthContext.Provider value={ContextValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
