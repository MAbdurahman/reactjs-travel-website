import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContext from './../contexts/navContext';
import { NAV_TOGGLE } from './../contexts/types/navTypes';

export default function Navigation() {
	//**************** variables ****************//
	const { state, dispatch } = useContext(NavContext);

	//**************** functions ****************//
	const clickHandler = () => {
		dispatch({ type: NAV_TOGGLE });
	};
	return (
		<>
			{state ? <div className='nav__layer'></div> : ''}
			<div className={state ? 'nav nav--open' : 'nav nav--close'}>
				<div className='nav__content'>
					<li>
						<Link to='/' onClick={clickHandler}>Home</Link>
					</li>
					<li>
						<Link to='/about' onClick={clickHandler}>About</Link>
					</li>
					<li>
						<Link to='/contact' onClick={clickHandler}>Contact</Link>
					</li>
				</div>
			</div>
		</>
	);
}
