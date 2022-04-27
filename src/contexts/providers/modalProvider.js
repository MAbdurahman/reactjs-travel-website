import { useReducer } from 'react';
import ModalContext from '../modalContext';
import ModalReducer from '../reducers/modalReducer';
const ModalProvider = props => {
	//**************** variables ****************//
	const [state, dispatch] = useReducer(ModalReducer, {
		modalStatus: false,
		current: '',
	});
	
	return (
		<ModalContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};
export default ModalProvider;
