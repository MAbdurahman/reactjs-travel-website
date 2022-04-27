import React, { useState, useEffect, useContext } from 'react';
import Header from './../components/Header';
import Modal from './../components/Modal';
import ModalContext from './../contexts/modalContext';
import { OPEN_MODAL } from '../contexts/types/modalTypes';

export default function Home() {
	//**************** variables ****************//
	const { dispatch } = useContext(ModalContext);
	const [state] = useState({
		heading: 'We are travelling friends',
		paragraph:
			'We travel to the most famous and beautiful places in the world.',
	});
	//**************** functions ****************//
	const openModal = () => {
		dispatch({ type: OPEN_MODAL });
	};
	
	return (
		<>
			<Header heading={state.heading} paragraph={state.paragraph}>
				<button className='btn-default' onClick={openModal}>
					Get Started
				</button>
			</Header>
			<Modal />
		</>
	);
}
