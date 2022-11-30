import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DestinationContext from './../contexts/destinationContext';
import { DETAILS, CITIES } from './../contexts/types/destinationTypes';
import Header from './../components/Header';
import DestinationInfo from './../components/DestinationInfo';
import Cities from './../components/cities/Cities'

export default function Details() {
	//**************** variables ****************//
	const { destinationsData, dispatch } = useContext(DestinationContext);
	const { details, filteredCities } = destinationsData;
	const { id } = useParams();

	//**************** functions ****************//
	useEffect(() => {
		dispatch({ type: DETAILS, payload: id });
		dispatch({ type: CITIES, payload: id });
		window.scrollTo(0, 0);
	}, [dispatch, id]);

	return (
		<>
			<Helmet>
				<title>{details.name}</title>
			</Helmet>
			<Header heading={details.name} image={details.bigImage}></Header>
			<DestinationInfo details={details} />
			<Cities cities={filteredCities} name={details.name} />
		</>
	);
}
