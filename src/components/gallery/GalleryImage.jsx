import React, { useContext } from 'react';
import GalleryContext from '../../contexts/galleryContext';
import { OPEN_LIGHT_BOX } from './../../contexts/types/galleryTypes';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function GalleryImage({ galleryImage }) {
	//**************** variables ****************//
	const { dispatch } = useContext(GalleryContext);
   
	//**************** functions ****************//
	const openLightBox = imageObject => {
		dispatch({ type: OPEN_LIGHT_BOX, payload: imageObject });
	};
	

	return (
		<div className='col-3'>
			<div className='gallery__image'>
				<LazyLoadImage
					src={galleryImage.image}
					onClick={() => openLightBox(galleryImage)}
				/>
			</div>
		</div>
	);
}
