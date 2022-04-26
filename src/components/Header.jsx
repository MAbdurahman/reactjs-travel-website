import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom';



export default function Header() {
	//**************** variables ****************//
	const [state] = useState({
		video1: '/assets/videos/travel.mp4',
		video2: '/assets/videos/travel.webm',
		video3: '/assets/videos/travel.ogv',
		poster: '/assets/images/travel.jpg',
		logo: '/assets/images/logo.png',
	});
	return (
		<div className='header'>
			<div className='container pr'></div>
			<div className='header__video'>
				<video id='video_background' autoPlay loop muted poster={state.poster}>
					<source src={state.video1} type='video/mp4' />
					<source src={state.video2} type='video/webm' />
					<source src={state.video3} type='video/ogg' />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}
