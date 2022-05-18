import React, { useContext, useState } from 'react';
import FooterLinksDisplay from './FooterLinksDisplay';
import DestinationContext from './../../contexts/destinationContext';

const FooterLinks = () => {
	//**************** variables ****************//
	const {
		destinationsData: { destinations },
	} = useContext(DestinationContext);

   console.log(destinations)
	const [state] = useState({
		pages: [
			{ id: 1, name: 'home', route: '/' },
			{ id: 2, name: 'about', route: '/about' },
			{ id: 3, name: 'contact', route: '/contact' },
		],
		partners: [
			{ id: 1, name: 'booking', route: 'https://www.booking.com/' },
			{ id: 2, name: 'trivago', route: 'https://www.trivago.com/' },
			{ id: 3, name: 'hostel world', route: 'https://www.hostelworld.com/' },
			{ id: 4, name: 'trip advisor', route: 'https://www.tripadvisor.com/' },
		],
		headings: {
			pages: 'pages',
			partners: 'partners',
			destinations: 'destinations',
		},
	});

	const { headings, pages, partners } = state;

	return (
		<div>
			<h2>footer links</h2>
		</div>
	);
};

export default FooterLinks;
