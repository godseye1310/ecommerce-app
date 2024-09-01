import React from 'react';

const CartItem = ({ title, price, imageUrl, quantity }) => {
	return (
		<tr className="font-bold box-content">
			<td className="px-6 py-4 font-medium whitespace-nowrap flex items-center gap-2 max-sm:px-2 text-wrap text-left">
				<span>
					<img
						className="size-20 rounded-lg max-sm:size-10"
						src={imageUrl}
						alt="product img"
					/>
				</span>
				<span>{title}</span>
			</td>
			<td className="px-6 py-4 max-sm:px-2">{price}</td>

			<td className="px-6 py-4 max-sm:px-2">
				<span className="border border-yellow-500 py-2 px-3 rounded-md max-sm:py-1 max-sm:px-2">
					{quantity}
				</span>
				<button
					type="button"
					className=" bg-red-500 px-4 py-2 ml-1 rounded-sm max-sm:py-1 max-sm:px-2"
				>
					Remove
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
