import React from 'react';

const Item = ({ title, price, imageUrl }) => {
	return (
		<li className=" bg-gray-300 border rounded-sm m-2">
			<h3 className=" text-center font-bold text-xl">{title}</h3>
			<div className=" overflow-hidden">
				<img
					className=" hover:scale-150 overflow-hidden transition duration-300"
					src={imageUrl}
					alt="product img"
				/>
			</div>
			<div className="flex justify-between items-center p-2">
				<span>
					$<span>{price}</span>
				</span>
				<button
					className="rounded-sm bg-sky-300 hover:bg-sky-600 py-1 px-3 font-medium text-white"
					type="button"
				>
					ADD TO CART
				</button>
			</div>
		</li>
	);
};

export default Item;
