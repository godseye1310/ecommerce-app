import React from 'react';

const Header = () => {
	return (
		<header className="flex flex-col">
			<ul className=" bg-black text-white flex justify-around p-4 w-full fixed top-0 z-10">
				<li>
					<a href="#">HOME</a>
				</li>
				<li>
					<a href="#">STORE</a>
				</li>
				<li>
					<a href="#">ABOUT</a>
				</li>
				<a href="#cart">
					cart<span>0</span>
				</a>
			</ul>

			<h1 className=" flex-1 text-6xl text-center text-white font-bold bg-gray-300 pt-16 pb-4">
				The Generics
			</h1>
		</header>
	);
};

export default Header;
