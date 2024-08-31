import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import useCartDisplay from '../store/cart-display-context';

const Header = () => {
	const { handleCartDisplay } = useCartDisplay();
	const showCart = () => {
		handleCartDisplay(true);
	};
	return (
		<header className="bg-gray-300 flex flex-col relative">
			<div className="  bg-black text-white p-4 flex w-full fixed top-0 z-10">
				<ul className=" flex flex-1 justify-center items-center  gap-10  font-semibold">
					<li>
						<a href="#">HOME</a>
					</li>
					<li>
						<a href="#">STORE</a>
					</li>
					<li>
						<a href="#">ABOUT</a>
					</li>
				</ul>
				<button
					className="px-4 py-2 font-bold rounded-md flex items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
					onClick={showCart}
				>
					<FaCartShopping className="mr-1" />
					cart<span className="ml-2">0</span>
				</button>
			</div>

			<h1 className="text-6xl text-center font-bold  pt-20 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
				The Generics
			</h1>
		</header>
	);
};

export default Header;
