import { OPEN_MODAL, CLOSE_MODAL } from '../types/modalTypes';
const ModelReducer = (state, action) => {
	if (action.type === OPEN_MODEL) {
		return {
			modelStatus: true,
			current: action.payload,
		};
	} else if (action.type === CLOSE_MODEL) {
		return {
			modelStatus: false,
			current: '',
		};
	} else {
		return state;
	}
};

export default ModelReducer;
