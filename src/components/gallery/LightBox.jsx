import React, { useContext } from 'react';
import GalleryContext from './../../contexts/galleryContext';
import { CLOSE_LIGHT_BOX } from '../../contexts/types/galleryTypes';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function LightBox() {
	//**************** variables ****************//
	const {
		galleryStore: { currentLightBox },
		dispatch,
	} = useContext(GalleryContext);

	//**************** functions ****************//
   const closeLightBox = e => {
		const className = e.target.getAttribute('class');
		if (className === 'gallery__lightbox') {
			dispatch({ type: CLOSE_LIGHT_BOX });
		}
	};
	return (
		<div className='gallery__lightbox' onClick={closeLightBox}>
			<h4>{currentLightBox.name}</h4>
			<div className='gallery__lightbox__card'>
				<div className='gallery__lightbox__card__image'>
					<LazyLoadImage
						src={currentLightBox.image}
						alt={currentLightBox.name}
					/>
				</div>
			</div>
		</div>
	);
}
