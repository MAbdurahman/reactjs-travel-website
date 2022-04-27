import React, { useContext, useState } from 'react';
import ModalContext from './../contexts/modalContext';
import { OPEN_MODAL } from './../contexts/types/modalTypes';

export default function SignUp(props) {
	//**************** variables ****************//
	const { dispatch } = useContext(ModalContext);
	const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
	});
	//**************** functions ****************//
	const handleSignUp = e => {
		e.preventDefault();
		console.log(state);
	};
	return (
		<form onSubmit={handleSignUp}>
			<div className='model__heading'>
				<h3>Sign Up</h3>
			</div>
			<div className='group'>
				<input
					type='text'
					name=''
					className='group__control'
					placeholder='Name'
					onChange={e => setState({ ...state, name: e.target.value })}
					value={state.name}
				/>
			</div>
			<div className='group'>
				<input
					type='email'
					name=''
					className='group__control'
					placeholder='Email'
					onChange={e => setState({ ...state, email: e.target.value })}
					value={state.email}
				/>
			</div>
			<div className='group'>
				<input
					type='password'
					name=''
					className='group__control'
					placeholder='Password'
					onChange={e => setState({ ...state, password: e.target.value })}
					value={state.password}
				/>
			</div>
			<div className='group model__row'>
				<input
					type='submit'
					name=''
					className='btn-dark'
					value='Register'
				/>
				<span>Already have an account?</span>
				<span
					onClick={() =>
						dispatch({ type: OPEN_MODAL, payload: props.currentModal })
					}
				>
					Sign In
				</span>
			</div>
		</form>
	);
}
