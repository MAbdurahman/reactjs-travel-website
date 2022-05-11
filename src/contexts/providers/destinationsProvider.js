import React, { useReducer } from 'react';
import DestinationContext from './../destinationContext';
import DestinationReducer from './../reducers/destinationReducer';
import Destinations from './../../data/destinations';
import Cities from './../../data/cities';

const DestinationsProvider = props => {
	const [destinationsData, dispatch] = useReducer(DestinationReducer, {
		destinations: Destinations,
		details: {},
		cities: Cities,
		filteredCities: [],
	});
	return (
		<DestinationContext.Provider value={{ destinationsData, dispatch }}>
			{props.children}
		</DestinationContext.Provider>
	);
};

export default DestinationsProvider;
