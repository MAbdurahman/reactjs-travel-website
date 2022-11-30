import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
	return (
		<div>
			<Helmet>
				<title>Travel/ Contact Us</title>
				<meta
					name='description'
					content='Travel the world with Travel.'
				/>
				<meta name='description' content='Travel. Contact Us' />
				<meta name='keywords' content='travel, travel tours, airline' />
			</Helmet>
			<h2>contact page</h2>
		</div>
	);
}
