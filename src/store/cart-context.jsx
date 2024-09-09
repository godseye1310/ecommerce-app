import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from './auth-context';

export const CartData = React.createContext();

const API_URL =
	'https://ecommerce-userdata-default-rtdb.asia-southeast1.firebasedatabase.app/userCart';

let cleanMail = `.not@log-in`;

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);

	const { isLoggedIn, token, userMail } = useAuth();

	if (isLoggedIn) {
		cleanMail = `cartOf${userMail.split(/[@.]/).join('')}`;
	}

	const addCartItem = async (item) => {
		// console.log(item);
		// console.log(cart);
		const updateItem = cart.find((data) => data.product_id === item.product_id);
		// console.log(updateItem);

		try {
			if (!updateItem) {
				// POST new item to Firebase rtdb
				const response = await axios.post(`${API_URL}/${cleanMail}.json?auth=${token}`, item);
				// console.log(response);
				console.log(response.status, response.statusText, 'Item POST Success');
				// Update Cart State...
				setCart((prevCart) => [...prevCart, { ...item, id: response.data.name }]);
			} else {
				// Update Item quantity in Firebase rtdb Using PATCH
				const response = await axios.patch(
					`${API_URL}/${cleanMail}/${updateItem.id}.json?auth=${token}`,
					{
						quantity: updateItem.quantity + item.quantity,
					}
				);
				// console.log(response);
				console.log(response.status, response.statusText, 'Item Update Success');
				// Update Item quantity in Cart State...
				setCart((prevCart) => {
					return prevCart.map((prevItem) =>
						prevItem.id === updateItem.id
							? { ...prevItem, quantity: prevItem.quantity + item.quantity }
							: prevItem
					);
				});
			}
		} catch (error) {
			console.log(error);
			console.log(error.message);
		}

		setTotal((prevTotal) => prevTotal + item.quantity * item.price);
	};

	// Set Cart Sate on UserLogin OR Preserve cart State on refresh...
	useEffect(() => {
		const fetchUserCart = async () => {
			if (token && isLoggedIn) {
				try {
					const response = await axios.get(`${API_URL}/${cleanMail}.json?auth=${token}`);
					console.log(response.status, response.statusText, 'Fetch userCart Success');

					if (response.status === 200) {
						// console.log(response.data); ////response data
						let loggedInUserCart = [];
						if (response.data) {
							loggedInUserCart = Object.keys(response.data).map((key) => {
								return { ...response.data[key], id: key.toString() };
							});
						}
						// console.log(loggedInUserCart);
						setCart(loggedInUserCart);
						setTotal(() => {
							return loggedInUserCart.reduce((acc, curr) => {
								return acc + curr.quantity * curr.price;
							}, 0);
						});
					}
				} catch (error) {
					console.log(error);
				}
			}
		};
		if (isLoggedIn) {
			fetchUserCart();
		}
	}, [isLoggedIn, token]);
	// console.log(cart);
	// console.log(total);
	const removeCartItem = async (id) => {
		try {
			const response = await axios.delete(`${API_URL}/${cleanMail}/${id}.json?auth=${token}`);
			console.log(response.status, response.statusText, 'Item Delete Success');
			if (response.status === 200) {
				setCart((prevCart) => {
					return prevCart.filter((item) => item.id !== id);
				});
				setTotal((prevTotal) => {
					for (const item of cart) {
						if (item.id === id) {
							return prevTotal - item.quantity * item.price;
						}
					}
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const cartctx = {
		addCartItem,
		removeCartItem,
		cart,
		total,
	};

	return <CartData.Provider value={cartctx}>{children}</CartData.Provider>;
};

const useCart = () => useContext(CartData);
export default useCart;
