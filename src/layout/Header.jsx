import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import useCartDisplay from '../store/cart-display-context';
import useCart from '../store/cart-context';
import { NavLink } from 'react-router-dom';

const Header = () => {
	const { handleCartDisplay } = useCartDisplay();
	const { cart } = useCart();
	const showCart = () => {
		handleCartDisplay(true);
	};

	const totalItems = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);

	return (
		<header className="bg-gray-300 flex flex-col relative w-full">
			<div className="  bg-black text-white p-4 flex w-full fixed top-0 z-10">
				<ul className=" flex flex-1 justify-center items-center gap-20 pl-24 font-semibold max-sm:text-sm max-sm:gap-6 max-sm:pl-16 max-xs:justify-start max-xs:pl-0">
					<li>
						<NavLink to="/home">HOME</NavLink>
					</li>
					<li>
						<NavLink to="/">STORE</NavLink>
					</li>
					<li>
						<NavLink to="/about">ABOUT</NavLink>
					</li>
				</ul>
				<button
					className="px-4 py-2 font-bold rounded-md flex items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 max-sm:text-sm"
					onClick={showCart}
				>
					<FaCartShopping className="mr-1" />
					cart <span className="ml-2">{totalItems}</span>
				</button>
			</div>

			<h1 className="text-6xl text-center font-bold  pt-20 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 max-xs:text-4xl">
				The Generics
			</h1>
		</header>
	);
};

export default Header;
