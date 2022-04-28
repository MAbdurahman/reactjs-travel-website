import { useReducer } from 'react';
import NavContext from '../navContext';
import NavReducer from '../reducers/navReducer';
const NavProvider = props => {
	const [state, dispatch] = useReducer(NavReducer, false);
	return (
		<NavContext.Provider value={{ state, dispatch }}>
			{props.children}
		</NavContext.Provider>
	);
};
export default NavProvider;
