import React from 'react';
import useCart from '../../store/cart-context';

const CartItem = ({ title, price, imageUrl, quantity, id }) => {
	const { removeCartItem } = useCart();

	const handleRemove = () => {
		removeCartItem(id);
	};

	return (
		<tr className=" odd:bg-green-300 odd:bg-opacity-15 even:bg-sky-500 even:bg-opacity-10 ">
			<td className="pl-1 py-3 whitespace-nowrap w-[18%]">
				<img
					className="size-20 rounded-lg object-cover max-xs:w-12 max-xs:h-auto"
					src={imageUrl}
					alt={title}
				/>
			</td>
			<td className="px-1 py-3 text-wrap whitespace-nowrap w-[28%]">{title}</td>
			<td className="px-2 py-3 whitespace-nowrap w-[18%]">${price}</td>
			<td className="px-1 py-3 whitespace-nowrap w-[16%]">
				<span className="border-2 border-gray-500 bg-white/15 py-2 px-3 rounded-md max-sm:py-1 max-sm:px-2 max-sm:text-xs leading-none ">
					{quantity}
				</span>
			</td>
			<td className="pr-1 py-3 whitespace-nowrap w-[20%]">
				<button
					type="button"
					onClick={handleRemove}
					className=" text-white/90 bg-red-500 bg-opacity-40 hover:bg-opacity-70 px-3 py-2 ml-1 rounded-md  max-sm:text-xs"
				>
					Remove
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
