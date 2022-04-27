import { OPEN_MODAL, CLOSE_MODAL } from '../types/modalTypes';
const ModalReducer = (state, action) => {
	if (action.type === OPEN_MODAL) {
		return {
			modalStatus: true,
			current: action.payload,
		};
	} else if (action.type === CLOSE_MODAL) {
		return {
			modalStatus: false,
			current: '',
		};
	} else {
		return state;
	}
};

export default ModalReducer;
