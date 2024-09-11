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
			className="px-4 py-2 font-bold rounded-md flex items-center relative bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 max-sm:rounded-full max-sm:px-3 max-xs:p-2"
			onClick={showCart}
		>
			<FaCartShopping className="mr-1 size-6" />

			<span className="max-sm:hidden">cart</span>

			<span className=" bg-rose-600 bg-opacity-80 rounded-full px-2 py-[6px] text-xs absolute -top-2 -right-2 max-xs:px-2 max-xs:py-[5px]">
				{totalItems}
			</span>
		</button>
	);
};

export default HeaderCartBtn;
