import React, { useState, useEffect, useContext } from 'react';
import Header from './../components/Header'

export default function Home() {
	//**************** variables ****************//
	const [state] = useState({
		heading: 'We are travelling friends',
		paragraph:
			'Come join us. We travel to the most famous and beautiful places in the world.world',
	});
	return (
		<>
			<Header heading={state.heading} paragraph={state.paragraph}>
				<button className="btn-default">Get Started</button>
			</Header>
		</>
	);
}
