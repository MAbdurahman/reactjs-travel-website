import React, { useContext, useState } from 'react';
import GalleryContext from './../../contexts/galleryContext';
import GalleryImage from './GalleryImage';
import LightBox from './LightBox';

export default function Gallery() {
	//**************** variables ****************//
	const [heading] = useState('Travel Captured Images');
	const {
		galleryStore: { galleryImages, lightBoxStatus },
		dispatch,
	} = useContext(GalleryContext);

	return (
		<>
			{lightBoxStatus ? <LightBox /> : ''}
			<div className='gallery'>
				<div className='container'>
					<h2 className='heading mb-55'>{heading}</h2>
					<div className='row'>
						{galleryImages.length > 0
							? galleryImages.map((galleryImage, index) => (
									<GalleryImage
										key={index}
										galleryImage={galleryImage}
									/>
							  ))
							: ''}
					</div>
				</div>
			</div>
		</>
	);
}
