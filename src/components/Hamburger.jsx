import React, { useContext } from 'react';
import NavContext from './../contexts/navContext';
import { NAV_TOGGLE } from './../contexts/types/navTypes';

export default function Hamburger() {
	//**************** variables ****************//
	const { state, dispatch } = useContext(NavContext);
	return (
		<div
			className={state ? 'hamburger--close' : 'hamburger--open'}
			onClick={() => dispatch({ type: NAV_TOGGLE })}
		>
			<span className='hamburger__line hamburger__line--1'></span>
			<span className='hamburger__line hamburger__line--2'></span>
			<span className='hamburger__line hamburger__line--3'></span>
		</div>
	);
}
