import React from 'react';
import Item from './Item';

const Products = () => {
	const productsArr = [
		{
			title: 'Colors',
			price: 100,
			imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
		},
		{
			title: 'Black and white Colors',
			price: 50,
			imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
		},
		{
			title: 'Yellow and Black Colors',
			price: 70,
			imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
		},
		{
			title: 'Blue Color',
			price: 100,
			imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
		},
	];

	return (
		<div className=" mt-5 flex items-center flex-col">
			<h1 className="text-center text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
				Colors
			</h1>
			<ul className=" flex p-2 m-2 px-5 flex-wrap items-stretch justify-around max-w-[1000px]">
				{productsArr.map((item) => {
					return <Item title={item.title} price={item.price} imageUrl={item.imageUrl} />;
				})}
			</ul>
		</div>
	);
};

export default Products;
