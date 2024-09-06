import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from './auth-context';

export const CartData = React.createContext();

const API_URL = `https://crudcrud.com/api/93ca5fd4824f4fc9a914cd4e9370c3a1/CartOfgilmailcom`;

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);

	const { isLoggedIn } = useAuth();

	const addCartItem = async (item) => {
		// console.log(item);
		try {
			const getItemResponse = await axios.get(API_URL);
			// console.log(getItemResponse.statusText); ///
			const updateItem = getItemResponse.data.find((data) => data.id === item.id);
			// console.log(updateItem); ///
			if (updateItem) {
				// Update Item in Backend Using PUT {crud:curd}
				const putItemResponse = await axios.put(`${API_URL}/${updateItem._id}`, {
					...item,
					quantity: updateItem.quantity + item.quantity,
				});
				console.log(putItemResponse.status, 'Item Update Success'); ///
				// Update Cart State...
				setCart((prevCart) => {
					return prevCart.map((prevItem) => {
						if (prevItem.id === updateItem.id) {
							return { ...prevItem, quantity: prevItem.quantity + item.quantity };
						}
						return prevItem;
					});
				});
			} else {
				// POST new item to Backend {crud:curd}
				const postItemResponse = await axios.post(API_URL, item);
				console.log(postItemResponse.status, 'Item POST Success');
				// Update Cart State...
				setCart([...cart, postItemResponse.data]);
			}
		} catch (error) {
			console.log(error);
		}
		// setCart((prevCart) => {
		// 	for (let preItem of prevCart) {
		// 		if (preItem.id === item.id) {
		// 			preItem.quantity += item.quantity;
		// 			return [...prevCart];
		// 		}
		// 	}
		// 	return [...prevCart, item];
		// });

		setTotal((prevTotal) => prevTotal + item.quantity * item.price); //Set Total Amout of Order...
	};

	// Set Cart Sate on UserLogin OR Preserve cart State on refresh...
	useEffect(() => {
		const fetchCart = async () => {
			try {
				const getItemResponse = await axios.get(API_URL);
				// console.log(getItemResponse.data);
				setCart(getItemResponse.data);
				// Calc. Total Amount...
				setTotal(() => {
					return getItemResponse.data.reduce((acc, curr) => {
						return acc + curr.quantity * curr.price;
					}, 0);
				});
			} catch (error) {
				console.log(error);
			}
		};

		if (isLoggedIn) {
			fetchCart();
		}
	}, [isLoggedIn]);

	// console.log(cart);
	const removeCartItem = async (id) => {
		try {
			const removeItemResponse = await axios.delete(`${API_URL}/${id}`);
			console.log(removeItemResponse.status, 'Item Delete Success');
			if (removeItemResponse.status === 200) {
				setCart((prevCart) => {
					return prevCart.filter((item) => item._id !== id);
				});
				setTotal((prevTotal) => {
					for (const item of cart) {
						if (item._id === id) {
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
