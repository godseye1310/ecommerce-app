import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from '../../store/cart-context';
import useCartDisplay from '../../store/cart-display-context';

const HeaderCartBtn = () => {
	const { handleCartDisplay } = useCartDisplay();
	const { cart } = useCart();
	const showCart = () => {
		handleCartDisplay(true);
	};

	const totalItems = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);
	return (
		<button
			className="px-4 py-2 font-bold rounded-md flex items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 max-sm:text-sm"
			onClick={showCart}
		>
			<FaCartShopping className="mr-1" />
			cart <span className="ml-2">{totalItems}</span>
		</button>
	);
};

export default HeaderCartBtn;
