import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavContext from './../contexts/navContext';

export default function Navigation() {
	return (
		<>
			<div className='nav__layer'></div>
			<div className='nav'>
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
