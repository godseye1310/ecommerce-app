import React from 'react';
import useCart from '../../store/cart-context';

const CartItem = ({ title, price, imageUrl, quantity, id }) => {
	const { removeCartItem } = useCart();

	const handleRemove = () => {
		removeCartItem(id);
	};

	return (
		<tr className="font-bold box-content odd:bg-green-300 odd:bg-opacity-15 even:bg-sky-500 even:bg-opacity-10 ">
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
					onClick={handleRemove}
					className=" bg-red-500 bg-opacity-60 hover:bg-opacity-90 px-4 py-2 ml-1 rounded-sm max-sm:py-1 max-sm:px-2"
				>
					Remove
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
