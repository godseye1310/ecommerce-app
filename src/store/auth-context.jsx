import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

const calcRemainningTime = (expirationTime) => {
	return expirationTime - Date.now();
};

let logoutTimer;

export const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('token') || null);
	const [userMail, setUserMail] = useState(localStorage.getItem('userMail') || null);
	const [tokenRefresh, setTokenRefresh] = useState(localStorage.getItem('refreshToken'));

	const isLoggedIn = !!token;

	const handletokenRefresh = useCallback(
		async (refreshToken) => {
			try {
				// const currentRefreshToken = refreshToken || localStorage.getItem('refreshToken');
				// if (!currentRefreshToken) {
				// 	throw new Error('No refresh token found');
				// }
				const response = await axios.post(
					'https://securetoken.googleapis.com/v1/token?key=AIzaSyCXlSCfAbbr-m_HjkDJRm7dPXV0Sajc9xM',
					{
						grant_type: 'refresh_token',
						refresh_token: refreshToken,
					},
					{
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded', // Set the content type
						},
					}
				);
				const newToken = response.data.id_token;
				const newRefreshToken = response.data.refresh_token;

				setToken(newToken);
				localStorage.setItem('token', newToken);

				setTokenRefresh(newRefreshToken);
				localStorage.setItem('refreshToken', newRefreshToken);

				const newExpirationTime = Date.now() + Number(response.data.expiresIn) * 1000;

				localStorage.setItem('sessionTime', newExpirationTime);

				console.log(response);
				const remainingTime = calcRemainningTime(newExpirationTime);

				// Schedule next token refresh
				logoutTimer = setTimeout(() => handletokenRefresh(tokenRefresh), 15000); // remainingTime - 360000 //Refresh 6 minutes before expiry
			} catch (error) {
				console.log('Error refreshing token:', error);
				logoutHandler(); // Optionally log the user out if refresh fails
				if (isLoggedIn) {
					alert('session time out. Please login Again');
				}
			}
		},
		[tokenRefresh, isLoggedIn]
	);

	const loginHandler = (token, email, expirationTime, refreshToken) => {
		setToken(token);
		localStorage.setItem('token', token);

		setUserMail(email);
		localStorage.setItem('userMail', email);

		setTokenRefresh(refreshToken);
		localStorage.setItem('refreshToken', refreshToken);

		localStorage.setItem('sessionTime', expirationTime.toString());

		// Calculate the time until token expires
		const remainingTime = calcRemainningTime(expirationTime);
		logoutTimer = setTimeout(() => handletokenRefresh(refreshToken), 15000); //remainingTime - 360000
	};

	const logoutHandler = () => {
		setToken(null);
		setUserMail(null);
		setTokenRefresh(null);
		localStorage.removeItem('token');
		localStorage.removeItem('userMail');
		localStorage.removeItem('refreshToken');

		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
	};
	useEffect(() => {
		localStorage.getItem('token');
		if (isLoggedIn) {
			handletokenRefresh(localStorage.getItem('refreshToken'));
		}
	}, [handletokenRefresh, isLoggedIn, tokenRefresh]);

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
