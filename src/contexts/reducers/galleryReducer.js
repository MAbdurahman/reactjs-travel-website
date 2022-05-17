import { OPEN_LIGHT_BOX, CLOSE_LIGHT_BOX } from '../types/galleryTypes';
const GalleryReducer = (state, action) => {
	if (action.type === OPEN_LIGHT_BOX) {
		return {
			...state,
			lightBoxStatus: true,
			currentLightBox: action.payload,
		};
	} else if (action.type === CLOSE_LIGHT_BOX) {
		return {
			...state,
			lightBoxStatus: false,
			currentLightBox: {},
		};
	} else {
		return state;
	}
};
export default GalleryReducer;
