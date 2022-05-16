import React, { useReducer } from 'react';
import SharedContext from './../sharedContext';
import SharedReducer from './../reducers/sharedReducer';
import Services from './../../data/services';
import Reviews from './../../data/reviews';

const SharedProvider = props => {
	//**************** variables ****************//
	const [sharedData, dispatch] = useReducer(SharedReducer, {
		servicesData: Services,
		reviews: Reviews,
	});

	return (
		<SharedContext.Provider value={{ sharedData, dispatch }}>
			{props.children}
		</SharedContext.Provider>
	);
};
export default SharedProvider;
