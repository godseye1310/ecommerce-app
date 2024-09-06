import React, { useState, useRef } from 'react';
import useAuth from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

const API_KEY = 'AIzaSyCXlSCfAbbr-m_HjkDJRm7dPXV0Sajc9xM';
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

const AuthForm = () => {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const { login } = useAuth();

	const navigateTo = useNavigate();

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
		emailInputRef.current.value = '';
		passwordInputRef.current.value = '';
	};

	const LogInHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		const userData = {
			email: enteredEmail,
			password: enteredPassword,
			returnSecureToken: true,
		};

		setIsLoading(true);

		try {
			if (isLogin) {
				// SIGN IN LOGIC...(Logging in Account)
				const response = await fetch(SIGNIN_URL, {
					method: 'POST',
					body: JSON.stringify(userData),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				setIsLoading(false);

				if (response.ok) {
					const data = await response.json();
					// console.log(data);
					login(data.idToken);

					emailInputRef.current.value = '';
					passwordInputRef.current.value = '';

					navigateTo('/products', { replace: true });
				} else {
					const errorData = await response.json();
					console.log(errorData);
					// can show an Failed Login error modal
					let errorMessage = 'Login Failed ' + errorData.error.message;
					throw new Error(errorMessage);
				}

				//////////////////////////////
			} else {
				// SIGN UP LOGIC (Create Account) ...//
				const response = await fetch(SIGNUP_URL, {
					method: 'POST',
					body: JSON.stringify(userData),
					headers: {
						'Content-Type': 'application/json',
					},
				});
				setIsLoading(false);
				if (response.ok) {
					console.log('Success:', response.status);
					const data = await response.json();
					console.log(data);
					login(data.idToken);

					emailInputRef.current.value = '';
					passwordInputRef.current.value = '';
					// ...
				} else {
					const data = await response.json();
					// show an error Failed SignUp modal
					console.error('Error:', data);
					let errorMessage = 'Authentication Failed';
					if (data && data.error && data.error.message) {
						errorMessage = data.error.message;
					}
					alert(errorMessage);
				}
			}
		} catch (error) {
			// console.error('Something went wrong:', error.message);
			alert(error.message);
		}
	};

	return (
		<section className="flex items-center justify-center min-h-full py-20 px-5 ">
			<div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg flex flex-col">
				<h2 className="text-4xl font-bold text-center text-gray-600">
					{' '}
					{isLogin ? 'Login' : 'Sign Up'}
				</h2>

				<form onSubmit={LogInHandler} className="space-y-6 font-semibold text-lg ">
					{/* Email Input */}
					<div>
						<label htmlFor="email" className="block text-base font-medium text-gray-700">
							Email Address
						</label>
						<input
							id="email"
							name="email"
							type="email"
							ref={emailInputRef}
							required
							autoFocus
							className="block w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:border-opacity-80 focus:bg-sky-100"
							placeholder="Enter your email"
						/>
					</div>

					{/* Password Input */}
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							ref={passwordInputRef}
							required
							autoComplete=""
							className="block w-full px-3 py-2 mt-1 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:border-opacity-80 focus:bg-sky-100"
							placeholder="Enter your password"
						/>
					</div>

					{/* Submit Button */}
					<div className="flex flex-col items-center">
						{!isLoading && (
							<button
								type="submit"
								className="w-full px-4 py-2 text-base  font-semibold text-white bg-sky-500 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none"
							>
								{isLogin ? 'Login' : 'Sign Up'}
							</button>
						)}

						{isLoading && (
							<img
								src="https://i.gifer.com/XDZT.gif"
								alt="creating acc"
								className="h-12 w-12"
							/>
						)}
					</div>
				</form>

				{/* Sign Up Option */}
				<button
					type="button"
					onClick={switchAuthModeHandler}
					className="text-sm font-bold text-center text-gray-500 hover:text-sky-500 "
				>
					{isLogin ? `Don't have an account? Sign Up` : 'Login with existing account'}
				</button>
			</div>
		</section>
	);
};

export default AuthForm;
