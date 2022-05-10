import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DestinationContext from './../contexts/destinationContext'
import { DETAILS } from './../contexts/types/destinationTypes'
import Header from './../components/Header'


export default function Details() {
	//**************** variables ****************//
	const { destinationsData, dispatch } = useContext(DestinationContext);
	const { details } = destinationsData;
	const { id } = useParams();

	//**************** functions ****************//
   useEffect(() => {
      dispatch({ type: DETAILS, payload: id });
      
   }, [dispatch, id]);
	return (
		<>
			<Helmet>
				<title>{details.name}</title>
			</Helmet>
			<Header heading={details.name} image={details.bigImage}></Header>
		</>
	);
}
