import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
	return (
		<div>
			<Helmet>
				<title>About Us</title>
				<meta
					name='description'
					content='Travel the world with Travelling Friends'
				/>
				<meta name='keywords' content='travel, travel tours, airline' />
			</Helmet>
			<h2>about page</h2>
		</div>
	);
}
