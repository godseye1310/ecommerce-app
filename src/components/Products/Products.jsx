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
		<>
			<div className=" mt-5">
				<h1 className="text-center text-4xl font-semibold">Colors</h1>
				<ul className=" flex p-2 m-2 items-center justify-between bg-black/50">
					{productsArr.map((item) => {
						return (
							<Item title={item.title} price={item.price} imageUrl={item.imageUrl} />
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Products;
