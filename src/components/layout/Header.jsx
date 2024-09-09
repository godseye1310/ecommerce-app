import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HeaderCartBtn from '../Cart/HeaderCartBtn';
import useAuth from '../../store/auth-context';

const Header = () => {
	const location = useLocation();
	const { isLoggedIn, logout } = useAuth();

	const handleLogout = () => {
		// navigateTo.replace('/auth');
		logout();
	};

	return (
		<header className="bg-[dimgray] flex flex-col relative w-full">
			<div className="  bg-black text-white p-4 flex w-full h-[75px] fixed top-0 z-10">
				<ul
					className={` flex flex-1 justify-center items-center gap-10 pl-24 font-semibold max-md:justify-start max-md:pl-0 max-sm:text-sm max-sm:gap-6 max-xs:text-xs max-xs:gap-3 ${
						location.pathname.startsWith('/products') ? '' : 'pr-24'
					}`}
				>
					<li>
						<NavLink
							to="/home"
							className={({ isActive }) =>
								isActive ? 'underline underline-offset-2 text-yellow-600' : 'hover:text-yellow-600'
							}
						>
							HOME
						</NavLink>
					</li>
					{isLoggedIn && (
						<li>
							<NavLink
								to="/products"
								className={({ isActive }) =>
									isActive
										? 'underline underline-offset-2 text-yellow-600'
										: 'hover:text-yellow-600'
								}
							>
								STORE
							</NavLink>
						</li>
					)}
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? 'underline underline-offset-2 text-yellow-600' : 'hover:text-yellow-600'
							}
						>
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								isActive ? 'underline underline-offset-2 text-yellow-600' : 'hover:text-yellow-600'
							}
						>
							Contact Us
						</NavLink>
					</li>

					{!isLoggedIn && (
						<li className=" text-sky-500">
							<NavLink
								to="/login"
								className={({ isActive }) =>
									isActive
										? 'underline underline-offset-2 text-yellow-600 bg-white/15 px-2 py-1 rounded'
										: 'hover:text-yellow-600 hover:bg-white/25 px-2 py-1 rounded bg-sky-500 bg-opacity-35'
								}
							>
								Login
							</NavLink>
						</li>
					)}

					{isLoggedIn && (
						<li>
							<button
								onClick={handleLogout}
								className="px-2 py-1 bg-red-500 bg-opacity-30 text-[#b22222] hover:text-[#e9967a] rounded hover:bg-red-600 hover:bg-opacity-60"
							>
								Logout
							</button>
						</li>
					)}
				</ul>

				{location.pathname.startsWith('/products') && <HeaderCartBtn />}
			</div>

			<div className="pt-24 pb-8 flex flex-col items-center">
				<h1 className="text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500 max-xs:text-4xl">
					The Generics
				</h1>

				{location.pathname === '/home' && (
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
