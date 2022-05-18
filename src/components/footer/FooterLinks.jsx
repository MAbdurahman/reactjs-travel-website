import React, { useContext, useState } from 'react';
import FooterLinksDisplay from './FooterLinksDisplay';
import DestinationContext from './../../contexts/destinationContext';

const FooterLinks = () => {
	//**************** variables ****************//
	const {
		destinationsData: { destinations },
	} = useContext(DestinationContext);

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
		<div className='row'>
			<div className='col-4 p-15'>
				<h3 className='footer__heading'>{headings.pages}</h3>
				<FooterLinksDisplay links={pages} />
			</div>
			<div className='col-4 p-15'>
				<h3 className='footer__heading'>{headings.partners}</h3>
				<FooterLinksDisplay links={partners} external={true} />
			</div>
			<div className='col-4 p-15'>
				<h3 className='footer__heading'>{headings.destinations}</h3>
				<FooterLinksDisplay links={destinations} />
			</div>
		</div>
	);
};

export default FooterLinks;
