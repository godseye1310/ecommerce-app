import React from 'react';

const CartItem = ({ title, price, imageUrl, quantity }) => {
	return (
		<tr className="font-bold box-content">
			<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2">
				<span>
					<img className="size-20 rounded-lg" src={imageUrl} alt="product img" />
				</span>
				<span>{title}</span>
			</td>
			<td className="px-6 py-4">{price}</td>
			<td className="px-6 py-4 gap-6 min-w-fit">
				<span className="border border-yellow-500 py-2 px-3 rounded-md">{quantity}</span>
				<button type="button" className=" bg-red-500 px-5 py-2 ml-1 rounded-sm">
					Remove
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
