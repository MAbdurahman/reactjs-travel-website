import React, { useContext } from 'react';
import ModalContext from './../contexts/modalContext';
import { CLOSE_MODAL } from './../contexts/types/modalTypes';

export default function Modal(props) {
	const { state, dispatch } = useContext(ModalContext);
	const closeModal = e => {
		if (e.target.getAttribute('class') === 'modal') {
			dispatch({ type: CLOSE_MODAL });
		}
	};
	return state.modalStatus && state.current === props.current ? (
		<div className='modal' onClick={closeModal}>
			<div className='modal__body'>{props.children}</div>
		</div>
	) : (
		''
	);
}
