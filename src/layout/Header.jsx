import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HeaderCartBtn from '../components/Products/Cart/HeaderCartBtn';

const Header = () => {
	const cartBtn = useLocation();

	return (
		<header className="bg-[dimgray] flex flex-col relative w-full">
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
					<li>
						<NavLink to="/contact">CONTACT US</NavLink>
					</li>
				</ul>

				{cartBtn.pathname === '/' && <HeaderCartBtn />}
			</div>

			<div className="pt-20 pb-8 flex flex-col items-center">
				<h1 className="text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 max-xs:text-4xl">
					The Generics
				</h1>

				{cartBtn.pathname === '/home' && (
					<div className="mt-10 py-5 text-white/80 flex flex-col items-center gap-5">
						<button className=" block bg-black/35 hover:bg-black/65 border-2 border-[#56CCF2] border-opacity-60 hover:border-opacity-90 px-4 py-3 rounded text-2xl font-medium">
							Get our Latest Album
						</button>
						<button className="block bg-black/35 hover:bg-black/60 border-2 border-[#56CCF2] border-opacity-60 hover:border-opacity-90 rounded-full text-[#56CCF2] text-3xl font-black px-6 py-5">
							►
						</button>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
