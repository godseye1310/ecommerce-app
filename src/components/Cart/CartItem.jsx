import React from 'react';
import useCart from '../../store/cart-context';
import { MdDeleteForever } from 'react-icons/md';

const CartItem = ({ title, price, imageUrl, quantity, id }) => {
	const { removeCartItem } = useCart();

	const handleRemove = () => {
		removeCartItem(id);
	};

	return (
		<tr className=" odd:bg-teal-500 odd:bg-opacity-15 even:bg-cyan-500 even:bg-opacity-10 ">
			<td className="pl-1 py-3 whitespace-nowrap w-[20%]">
				<img
					className="size-24 rounded-lg object-cover max-xs:size-16"
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
			<td className="pr-1 py-3 whitespace-nowrap w-[10%]">
				<button
					type="button"
					onClick={handleRemove}
					className=" text-white/90 bg-red-500 bg-opacity-40 hover:bg-opacity-70 ml-1 rounded-md p-1  max-sm:text-xs"
				>
					<MdDeleteForever className="size-7 max-xs:size-5" />
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
