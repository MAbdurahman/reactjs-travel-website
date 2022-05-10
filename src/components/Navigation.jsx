import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContext from './../contexts/navContext';

export default function Navigation() {
	//**************** variables ****************//
   const { state, dispatch } = useContext(NavContext);

	return (
		<>
			{state ? <div className='nav__layer'></div> : ''}
			<div className={state ? 'nav nav--open' : 'nav nav--close'}>
				<div className='nav__content'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</div>
			</div>
		</>
	);
}
