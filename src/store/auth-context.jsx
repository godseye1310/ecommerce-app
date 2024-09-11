import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

const calcRemainingTime = (expirationTime) => {
	// console.log(expirationTime - Date.now());

	return expirationTime - Date.now();
};

let logoutTimer;

export const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem('token') || null);
	const [userMail, setUserMail] = useState(localStorage.getItem('userMail') || null);
	// const [tokenRefresh, setTokenRefresh] = useState(localStorage.getItem('refreshToken') || null);

	const isLoggedIn = !!token;

	const handletokenRefresh = useCallback(async (refreshToken) => {
		try {
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
			console.log(response.data);
			const newToken = response.data.id_token;
			const newRefreshToken = response.data.refresh_token;
			const newExpirationTime = Date.now() + Number(response.data.expires_in) * 1000;
			// const newExpirationTime = Date.now() + 30 * 1000; //remove after testing
			const neWremainingTime = calcRemainingTime(+newExpirationTime);
			console.log(`Next refresh scheduled in: ${(neWremainingTime - 15000) / 1000}sec`);
			console.log('handletokenRefresh', typeof neWremainingTime);

			// Update local storage with new token, refresh token, and session expiration time
			setToken(newToken);
			localStorage.setItem('token', newToken);
			// setTokenRefresh(newRefreshToken); //maybe this line is not needed. Confirmed Not needed.
			localStorage.setItem('refreshToken', newRefreshToken);
			localStorage.setItem('sessionTime', newExpirationTime.toString());

			// Make sure the userMail is still intact, if missing, log the user out
			if (!localStorage.getItem('userMail')) {
				logoutHandler();
				return;
			}
			// Schedule next token refresh
			logoutTimer = setTimeout(() => handletokenRefresh(newRefreshToken), neWremainingTime - 15000);
		} catch (error) {
			console.log('Error refreshing token:', error);
			// Optionally log the user out if refresh fails
			logoutHandler();
			alert('session time out. Please login Again');
		}
	}, []);

	const loginHandler = (token, email, expirationTime, refresh_token) => {
		setToken(token);
		localStorage.setItem('token', token);

		setUserMail(email);
		localStorage.setItem('userMail', email);

		// setTokenRefresh(refresh_token); //!maybe this line is not needed. Nope this line is a MUST. not really lol
		localStorage.setItem('refreshToken', refresh_token);
		// expirationTime = Date.now() + 30 * 1000; //remove after testing
		localStorage.setItem('sessionTime', expirationTime.toString());

		// Calculate the time until token expires
		const remainingTime = calcRemainingTime(expirationTime);
		console.log(`User logged in. Token will expire in: ${remainingTime / 1000}sec`);
		console.log(
			`Refresh token scheduled for: ${(remainingTime - 15000) / 1000}sec (15sec before expiration)`
		);

		if (remainingTime > 0) {
			logoutTimer = setTimeout(() => handletokenRefresh(refresh_token), remainingTime - 15000);
		} else {
			logoutHandler();
		}
	};

	const logoutHandler = () => {
		console.log('Logging out user...');

		setToken(null);
		setUserMail(null);
		// setTokenRefresh(null);
		localStorage.removeItem('token');
		localStorage.removeItem('userMail');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('sessionTime');

		if (logoutTimer) {
			clearTimeout(logoutTimer);
		}
		console.log('User successfully logged out');
	};
	// On initial load or page refresh
	useEffect(() => {
		const storedExpirationTime = localStorage.getItem('sessionTime');
		const storedRefreshToken = localStorage.getItem('refreshToken');
		if (storedExpirationTime && isLoggedIn) {
			const remainingTime = calcRemainingTime(Number(storedExpirationTime));
			console.log(`Time remaining for token: ${remainingTime / 1000}sec`);

			if (remainingTime > 0) {
				// Token is valid, schedule the refresh
				// Avoid multiple timeouts
				if (!logoutTimer) {
					logoutTimer = setTimeout(
						() => handletokenRefresh(storedRefreshToken),
						remainingTime - 15000
					);
				}
			} else {
				// Expired, log out
				logoutHandler();
				console.log('Token expired on page load, logging out...');
			}
		}
	}, [handletokenRefresh, isLoggedIn]);

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
