import React, { useContext, useState } from 'react';
import axios from 'axios';

export const CartData = React.createContext();

const API_URL = 'https://crudcrud.com/api/f2e5e17aa46b4f3e9353bee15071337e/cart';

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	const [mail, setMail] = useState();
	// const [cleanedEmail, setCleanedEmail] = useState('');

	// const cleanMail = mail.replace(/[@.]/g, '');

	// Remove '@' and '.'

	const addCartItem = async (item) => {
		// console.log(item);
		// setCart((prevCart) => {
		// 	for (let preItem of prevCart) {
		// 		if (preItem.id === item.id) {
		// 			preItem.quantity += item.quantity;
		// 			return [...prevCart];
		// 		}
		// 	}
		// 	return [...prevCart, item];
		// });

		const cleanMail = await mail.replace(/[@.]/g, '');
		console.log(cleanMail);

		try {
			const response = await axios.post(`${API_URL}${cleanMail}`, cart);
			console.log(response.data);
			// console.log(response.status, response.statusText, 'List POST Success');
			setCart((prevCart) => [...prevCart, response.data]);
		} catch (error) {
			console.log(error);
		}

		setTotal((prevTotal) => prevTotal + item.quantity * item.price);
	};
	// console.log(cart);
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
		try {
			const response = await axios.get(`${API_URL}/gilmailcom`);
			console.log('Added', response.data);
			console.log(response.status, response.statusText, 'Fetch on Refresh Success');
			setCart(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const cartctx = {
		addCartItem,
		removeCartItem,
		cart,
		total,
		setMail,
		loginCartHandle,
	};

	return <CartData.Provider value={cartctx}>{children}</CartData.Provider>;
};

const useCart = () => useContext(CartData);
export default useCart;
