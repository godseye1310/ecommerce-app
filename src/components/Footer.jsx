import React from 'react';
import { FaYoutube, FaSpotify, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className=" bg-sky-500 text-white p-5 mt-3 flex justify-around">
			<div className=" text-4xl text-center font-bold ">The Generics</div>
			<div>
				<ul className="flex gap-8 items-center ">
					<li className="bg-white/90 rounded-sm">
						<a
							href="https://www.youtube.com"
							target=""
							className="text-[#FF000096] hover:text-[#FF0000] text-5xl"
						>
							<FaYoutube />
						</a>
					</li>
					<li className="bg-white/90 rounded-sm">
						<a
							href="https://spotify.com"
							className=" text-[#1DB95496] hover:text-[#1DB954] text-5xl"
						>
							<FaSpotify />
						</a>
					</li>
					<li className="bg-white/90 rounded-sm">
						<a
							href="https://facebook.com"
							className="text-5xl text-[#1877F296] hover:text-[#1877F2] "
						>
							<FaFacebookSquare />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
