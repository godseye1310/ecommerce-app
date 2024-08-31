import React from 'react';

const Header = () => {
	return (
		<header className=" bg-gray-300">
			<ul className=" bg-black text-white flex justify-around p-4">
				<li>
					<a href="#">HOME</a>
				</li>
				<li>
					<a href="#">STORE</a>
				</li>
				<li>
					<a href="#">ABOUT</a>
				</li>
				<a href="#cart" class="cart-holder">
					cart<span class="cart-number">0</span>
				</a>
			</ul>
			<h1 className=" text-6xl text-center text-white font-bold">The Generics</h1>
		</header>
	);
};

export default Header;
