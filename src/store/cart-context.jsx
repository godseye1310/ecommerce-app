import React, { useContext, useState } from 'react';

export const CartData = React.createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);

	const addCartItem = (item) => {
		// console.log(item);
		setCart((prevCart) => {
			for (let preItem of prevCart) {
				if (preItem.id === item.id) {
					preItem.quantity += item.quantity;
					return [...prevCart];
				}
			}
			return [...prevCart, item];
		});

		setTotal((prevTotal) => prevTotal + item.quantity * item.price);
	};
	console.log(cart);
	console.log(total);

	const cartctx = {
		addCartItem,
		cart,
		total,
	};

	return <CartData.Provider value={cartctx}>{children}</CartData.Provider>;
};

const useCart = () => useContext(CartData);
export default useCart;
