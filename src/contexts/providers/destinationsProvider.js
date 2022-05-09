import React, { useReducer } from 'react';
import DestinationContext from './../destinationContext';
import DestinationReducer from './../reducers/destinationReducer';
import Destinations from './../../data/destinations';

const DestinationsProvider = props => {
	const [destinationData, dispatch] = useReducer(DestinationReducer, {
		destinations: Destinations,
	});
	return (
		<DestinationContext.Provider value={{ destinationData, dispatch }}>
			{props.children}
		</DestinationContext.Provider>
	);
};

export default DestinationsProvider;
