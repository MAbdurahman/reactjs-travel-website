import React, { useReducer } from 'react';
import DestinationContext from './../destinationContext';
import DestinationReducer from './../reducers/destinationReducer';
import Destinations from './../../data/destinations';

const DestinationsProvider = props => {
	const [destinationsData, dispatch] = useReducer(DestinationReducer, {
		destinations: Destinations,
		details: {},
	});
	return (
		<DestinationContext.Provider value={{ destinationsData, dispatch }}>
			{props.children}
		</DestinationContext.Provider>
	);
};

export default DestinationsProvider;
