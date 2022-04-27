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
			<div className='modal__body'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ducimus repellat ullam optio quasi eum necessitatibus amet recusandae corporis culpa commodi minus. Neque, molestiae asperiores. Dolores magni autem sint hic.</div>
		</div>
	) : (
		''
	);
}
