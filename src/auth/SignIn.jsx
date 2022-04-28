import React, { useContext, useState } from 'react';
import ModalContext from './../contexts/modalContext';
import { OPEN_MODAL } from './../contexts/types/modalTypes';

export default function SignIn(props) {
   //**************** variables ****************//
   const { dispatch } = useContext(ModalContext);
	const [state, setState] = useState({
		email: '',
		password: '',
	});
   //**************** functions ****************//
	const handleSignIn = (e) => {
		e.preventDefault();
		console.log(state);
   }
	return (
		<form onSubmit={handleSignIn}>
			<div className='modal__heading'>
				<h3>Sign In</h3>
			</div>
			<div className='group'>
				<input
					type='email'
					name=''
					className='group__control'
					placeholder='Enter email'
					onChange={e => setState({ ...state, email: e.target.value })}
					value={state.email}
				/>
			</div>
			<div className='group'>
				<input
					type='password'
					name=''
					className='group__control'
					placeholder='Enter password'
					onChange={e => setState({ ...state, password: e.target.value })}
					value={state.password}
				/>
			</div>
			<div className='group model__row'>
				<input type='submit' name='' className='btn-dark' value='Sign In' />
				<p
					style={{ display: 'inline-block', marginLeft: '4em' }}
					onClick={() =>
						dispatch({ type: OPEN_MODAL, payload: props.currentModal })
					}
				>
					Do not have an account?&nbsp;
					<span style={{color: '#ff4d58'}}>Sign Up</span>
				</p>
			</div>
		</form>
	);
}
