import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import useCartDisplay from '../../store/cart-display-context';
import useCart from '../../store/cart-context';
import { IoClose } from 'react-icons/io5';

const CartModal = ({ closeCart }) => {
	const { cartDisplay } = useCartDisplay();

	const { cart, total } = useCart();

	return (
		<div
			className={` bg-gray-900 min-w-[610px] text-white fixed top-[75px] right-0 h-full overflow-y-auto flex flex-col items-stretch px-5 z-30 transition ease-linear duration-300 ${
				cartDisplay ? 'translate-x-0 scale-x-100' : 'translate-x-full scale-x-0'
			} max-sm:min-w-full max-sm:px-2 cart-scrollbar`}
		>
			<h1 className="pb-4 pt-6 text-center font-bold text-4xl">CART</h1>
			<button
				type="button"
				className=" mr-2 font-bold text-2xl bg-red-600 bg-opacity-50 hover:bg-opacity-85 px-0 py-0 rounded-md fixed top-3 right-3"
				onClick={closeCart}
			>
				<IoClose className="size-10 transition duration-200 hover:rotate-90" />
			</button>

			<div className="rounded-lg h-full overflow-hidden pb-4">
				<div className="relative">
					<table className="w-full table-auto">
						<thead className="text-gray-400 text-sm text-left uppercase bg-gray-700 sticky top-0 z-10">
							<tr className=" w-[100%]">
								<th className="pl-1 py-4 w-[18%]"></th>
								<th className="px-1 py-4 w-[28%] ">Product</th>
								<th className="px-1 py-4 w-[18%]">Price</th>
								<th className="px-1 py-4 w-[18%]">Qty</th>
								<th className="pr-1 py-4 w-[18%]"></th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="overflow-y-auto rounded-b-lg max-h-[90%] cartList-scrollbar">
					<table className="w-full text-sm text-left text-white/80 ">
						<tbody className="w-full font-semibold max-xs:font-medium">
							{cart.map((item) => {
								return (
									<CartItem
										key={item.id}
										id={item.id}
										title={item.title}
										price={item.price}
										imageUrl={item.imageUrl}
										quantity={item.quantity}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>

			<div className="w-full text-right text-2xl my-2 py-4 border-t-2 border-gray-600">
				<span className="mr-5 font-bold">Total</span>
				<span className="ml-5">
					$<span>{total}</span>
				</span>
			</div>

			<div className="flex justify-center self-end mt-auto pb-28">
				<button
					type="button"
					className="py-2 px-5 font-semibold text-2xl max-xs:text-xl bg-blue-900 rounded-md hover:bg-sky-700"
				>
					PURCHASE
				</button>
			</div>
		</div>
	);
};

// export default Cart;
const Backdrop = ({ closeCart }) => {
	return (
		<div
			className=" fixed top-[75px] left-0 w-full h-screen z-20 bg-black/60"
			onClick={closeCart}
		/>
	);
};

const Cart = () => {
	// Use ReactDOM.createPortal to render the Cart component into #cartOverlay
	const { cartDisplay, handleCartDisplay } = useCartDisplay();

	const closeCart = () => {
		handleCartDisplay(false);
	};

	React.useEffect(() => {
		// Disable scrolling on the body when the cart is displayed
		if (cartDisplay) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		// Clean up on component unmount
		return () => {
			document.body.style.overflow = '';
		};
	}, [cartDisplay]);

	return (
		<>
			{cartDisplay &&
				ReactDOM.createPortal(
					<Backdrop closeCart={closeCart} />,
					document.getElementById('cartOverlay')
				)}

			{ReactDOM.createPortal(
				<CartModal closeCart={closeCart} />,
				document.getElementById('cartOverlay')
			)}
		</>
	);
};

export default Cart;
