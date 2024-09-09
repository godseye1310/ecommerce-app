import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from '../../store/cart-context';
import useCartDisplay from '../../store/cart-display-context';

const HeaderCartBtn = () => {
	const { setCartDisplay } = useCartDisplay();
	const { cart } = useCart();
	const showCart = () => {
		setCartDisplay((prevDisplay) => !prevDisplay);
	};

	const totalItems = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);
	return (
		<button
			className="px-4 py-2 font-bold rounded-md flex items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 max-sm:text-sm max-sm:rounded-full max-sm:px-2"
			onClick={showCart}
		>
			<FaCartShopping className="mr-1 text-xl max-xs:text-lg" />
			<span className="max-sm:hidden">cart</span>
			<span className="ml-2 bg-black/30 hover:bg-black/60 rounded-full px-2 max-sm:ml-0 max-xs:text-xs ">
				{totalItems}
			</span>
		</button>
	);
};

export default HeaderCartBtn;
