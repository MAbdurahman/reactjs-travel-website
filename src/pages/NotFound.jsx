import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
	return (
		<div>
			<Helmet>
				<title>Travel/ Not Found Page</title>
				<meta
					name='description'
					content='Travel the world with Travel.'
				/>
				<meta name='description' content='Travel. Not Found' />
				<meta name='keywords' content='travel, travel tours, airline' />
			</Helmet>
			<h2>notFound page</h2>
		</div>
	);
}
