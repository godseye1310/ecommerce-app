import React from 'react';
import { AiOutlineSpotify } from 'react-icons/ai';
import { FaBeer } from 'react-icons/fa';
import { FcMusic } from 'react-icons/fc';
import { TfiYoutube } from 'react-icons/tfi';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => {
	return (
		<footer className=" bg-sky-500 text-white p-5 flex justify-around text-4xl items-center max-xs:text-xl w-full mt-auto ">
			<div className=" text-center font-bold ">
				<h3 className="flex">
					The Generics
					<span>
						<FcMusic className="size-8" />
					</span>
				</h3>
			</div>

			<div className="flex flex-col gap-3">
				<ul className="flex gap-8 items-center ">
					<li>
						<a
							href="https://www.youtube.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex rounded-full bg-gray-700 hover:bg-black/75 p-2"
						>
							<TfiYoutube className="size-8 max-xs:size-5 text-[#FF0000] " />
						</a>
					</li>
					<li>
						<a
							href="https://spotify.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex rounded-full bg-[#1DB954] hover:bg-[#1db954c5]"
						>
							<AiOutlineSpotify className="size-14 max-xs:size-10 hover:text-black/75 text-gray-600" />
						</a>
					</li>
					<li>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex rounded-full bg-[#1876f2b6] hover:bg-[#0f77ff]"
						>
							<TiSocialFacebook className="size-12 max-xs:size-8" />
						</a>
					</li>
				</ul>

				<div className="flex items-center space-x-4">
					<span className="inline-flex items-center justify-center p-2 bg-yellow-500 rounded-full">
						<FaBeer className="text-rose-700 text-2xl" />
					</span>
					<p className="text-xl">Have a beer!</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
