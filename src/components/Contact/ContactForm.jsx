import React, { useState } from 'react';

const API_URL =
	'https://ecommerce-userdata-default-rtdb.asia-southeast1.firebasedatabase.app/userContacts';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});
	// console.log('re-rendered');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log('Form Data:', formData);

		//form submission logic
		try {
			const response = await fetch(`${API_URL}.json`, {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response.status, response.statusText, 'Contact details received');
			if (!response.ok) {
				throw new Error(`Contact Failed. HTTP error! status: ${response.statusText}`);
			}
			//  to parse the response data. *Optional!! (NOT really Needed here in 'POST')
			// const data = await response.json();
			// console.log(data);

			setFormData({
				name: '',
				email: '',
				phone: '',
			});
		} catch (error) {
			console.log('Error : ', error.message);
		}
	};

	return (
		<section className="pb-20 pt-10 px-5 max-w-[900px] my-5 mx-auto text-lg flex justify-around items-baseline max-sm:flex-col max-sm:items-center ">
			<h2 className="text-5xl font-bold mb-6 text-left capitalize p-5 font-serif">Contact US</h2>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md p-8 bg-white shadow-md rounded-lg mx-5"
			>
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700 font-medium mb-2">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
						placeholder="Enter your name"
						required
						autoFocus
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-medium mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
						placeholder="Enter your email"
						required
					/>
				</div>

				<div className="mb-6">
					<label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
						placeholder="Enter your phone number"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
				>
					Submit
				</button>
			</form>
		</section>
	);
};

export default ContactForm;
