import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HeaderCartBtn from '../components/Products/Cart/HeaderCartBtn';

const Header = () => {
	const cartBtn = useLocation();

	return (
		<header className="bg-gray-300 flex flex-col relative w-full">
			<div className="  bg-black text-white p-4 flex w-full fixed top-0 z-10">
				<ul
					className={` flex flex-1 justify-center items-center gap-20 pl-24 font-semibold max-sm:text-sm max-sm:gap-6 max-sm:pl-16 max-xs:justify-start max-xs:pl-0 ${
						cartBtn.pathname === '/' ? '' : 'pr-24'
					}`}
				>
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

				{cartBtn.pathname === '/' && <HeaderCartBtn />}
			</div>

			<h1 className="text-6xl text-center font-bold  pt-20 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 max-xs:text-4xl">
				The Generics
			</h1>
		</header>
	);
};

export default Header;
