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
				<video
					id='video_background'
					autoPlay
					loop
					muted
					poster={state.poster}
				>
					<source src={state.video1} type='video/mp4' />
					<source src={state.video2} type='video/webm' />
					<source src={state.video3} type='video/ogg' />
					Your browser does not support the video tag.
				</video>
				<div className='header__contents'>
					<div className='container'>
						<div className='header__contents__text'>
							<div className='header__contents__text__child'>
								<h1 className='header__contents__text__child__h1'>
									We are travelling friends
								</h1>
								<p className='header__contents__text__child__p'>
									Come join us. We travel the most famous and beautiful places in the world.
								</p>
								<div className='header__contents__text__child__link'>
									<button>Get Started</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
