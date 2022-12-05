import React, { useContext, useState } from 'react';
import DestinationContext from './../contexts/destinationContext'
import DestinationsList from './DestinationsList';


export default function Destinations() {
	const {destinationsData: {destinations}} = useContext(DestinationContext)
	
	const [state] = useState({
		heading:
			'Discover the most engaging places in the world with TRAVEL',
		paragraph:
			'Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comfort of home and friends. You are constantly off balance. Nothing is yours except the essential things: air, sleep, dreams, sea, the sky - all things tending towards the eternal or what we imagine of it. -- Cesare Pavevese',
	});
	return (
		<div className='destinations'>
			<div className='container'>
				<div className='row'>
					<div className='col-6 p-10'>
						<h2 className='destinations__heading'>{state.heading}</h2>
					</div>
					<div className='col-6 p-15'>
						<p className='destinations__paragraph'>{state.paragraph}</p>
					</div>
				</div>
			</div>
			<div className='destinations_block'>
				<div className='row'>
					{destinations.map(destination => (
						<DestinationsList
							destination={destination}
							key={destination.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
