import React, { useReducer } from 'react';
import GalleryContext from './../galleryContext';
import GalleryReducer from '../reducers/galleryReducer';
import GalleryImages from './../../data/gallery';

const GalleryProvider = props => {
	//**************** variables ****************//
	const [galleryStore, dispatch] = useReducer(GalleryReducer, {
		galleryImages: GalleryImages,
		lightBoxStatus: false,
		currentLightBox: {},
	});
	return (
		<GalleryContext.Provider value={{ galleryStore, dispatch }}>
			{props.children}
		</GalleryContext.Provider>
	);
};

export default GalleryProvider;
