import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './../components/Header';
import Modal from './../components/Modal';
import ModalContext from './../contexts/modalContext';
import { OPEN_MODAL } from '../contexts/types/modalTypes';
import SignIn from './../auth/SignIn';
import SignUp from './../auth/SignUp';
import Destinations from './../components/Destinations';
import Services from './../components/services/Services';
import Reviews from './../components/reviews/Reviews';
import Gallery from './../components/gallery/Gallery';

export default function Home() {
	//**************** variables ****************//
	const { dispatch } = useContext(ModalContext);
	const [signUpModal] = useState('signUpModal');
	const [signInModal] = useState('signInModal');
	const [state] = useState({
		heading: 'We are Travel.',
		paragraph:
			'We travel to the most famous and beautiful places in the world.',
	});
	//**************** functions ****************//
	const openModal = () => {
		dispatch({ type: OPEN_MODAL, payload: signUpModal });
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>Travel.</title>
				<meta name='description' content='Travel the world with Travel.' />
				<meta name='keywords' content='travel, travel tours, airline' />
			</Helmet>
			<Header heading={state.heading} paragraph={state.paragraph}>
				<button className='btn-default' onClick={openModal}>
					Get Started
				</button>
			</Header>
			<Modal current={signUpModal}>
				<SignUp currentModal={signInModal} />
			</Modal>
			<Modal current={signInModal}>
				<SignIn currentModal={signUpModal} />
			</Modal>
			<Destinations />
			<Services />
			<Reviews />
			<Gallery />
		</>
	);
}
