import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CartData = React.createContext();

const API_URL = `https://crudcrud.com/api/5eec3042166040bb8ee9c66b768c7b63/cartgilmailcom`;

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	// const [mail, setMail] = useState();

	// const [cleanedEmail, setCleanedEmail] = useState('');
	// const cleanMail = mail.replace(/[@.]/g, '');
	// Remove '@' and '.'

	const addCartItem = async (item) => {
		// console.log(item);
		try {
			const getItemResponse = await axios.get(API_URL);
			// console.log(getItemResponse.statusText); ///

			const updateItem = getItemResponse.data.find((data) => data.id === item.id);
			// console.log(updateItem); ///

			if (updateItem) {
				const putItemResponse = await axios.put(`${API_URL}/${updateItem._id}`, {
					...item,
					quantity: updateItem.quantity + item.quantity,
				});
				console.log(putItemResponse.statusText, 'Item Update Success'); ///

				setCart((prevCart) => {
					return prevCart.map((prevItem) => {
						if (prevItem.id === updateItem.id) {
							return { ...prevItem, quantity: prevItem.quantity + item.quantity };
						}
						return prevItem;
					});
				});
			} else {
				const postItemResponse = await axios.post(API_URL, item);
				console.log(postItemResponse.data);
				console.log(postItemResponse.status, 'Item POST Success');

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
		setTotal((prevTotal) => prevTotal + item.quantity * item.price);
	};

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const getItemResponse = await axios.get(API_URL);
				// console.log(getItemResponse.data);
				setCart(getItemResponse.data);

				setTotal(() => {
					return getItemResponse.data.reduce((acc, curr) => {
						return acc + curr.quantity * curr.price;
					}, 0);
				});
			} catch (error) {
				console.log(error);
			}
		};

		if (true) {
			fetchCart();
		}
	}, []);

	console.log(cart);
	// console.log(total);
	const removeCartItem = (id) => {
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
	};

	const loginCartHandle = async () => {
		// try {
		// 	const response = await axios.get(`${API_URL}/gilmailcom`);
		// 	console.log('Added', response.data);
		// 	console.log(response.status, response.statusText, 'Fetch on Refresh Success');
		// 	setCart(response.data);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

	const cartctx = {
		addCartItem,
		removeCartItem,
		cart,
		total,
		// setMail,
		loginCartHandle,
	};

	return <CartData.Provider value={cartctx}>{children}</CartData.Provider>;
};

const useCart = () => useContext(CartData);
export default useCart;
