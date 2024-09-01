import React from 'react';

const tourData = [
	{
		date: 'JUL 16',
		city: 'DETROIT, MI',
		venue: 'DTE ENERGY MUSIC THEATRE',
	},
	{
		date: 'JUL 19',
		city: 'TORONTO,ON',
		venue: 'BUDWEISER STAGE',
	},
	{
		date: 'JUL 22',
		city: 'BRISTOW, VA',
		venue: 'JIGGY LUBE LIVE',
	},
	{
		date: 'JUL 29',
		city: 'PHOENIX, AZ',
		venue: 'AK-CHIN PAVILION',
	},
	{
		date: 'AUG 2',
		city: 'LAS VEGAS, NV',
		venue: 'T-MOBILE ARENA',
	},
	{
		date: 'AUG 7',
		city: 'CONCORD, CA',
		venue: 'CONCORD PAVILION',
	},
];

const Home = () => {
	return (
		<section className="pb-32 px-6 max-w-[900px] my-0 mx-auto text-lg">
			<h2 className="text-5xl font-bold text-center capitalize p-5 font-serif">TOURS</h2>
			<div>
				{tourData.map((tour, i) => {
					return (
						<div className="flex p-2 border-b border-gray-900 text-[#777] font-semibold text-wrap">
							<span className=" w-[12%] text-gray-900 font-bold">{tour.date}</span>
							<span className="w-1/4">{tour.city}</span>
							<span className="w-[53%]">{tour.venue}</span>
							<button className="w-1/5 bg-sky-500 p-2 rounded-md font-bold text-white/90 hover:bg-sky-600">
								BUY TICKETS
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Home;
