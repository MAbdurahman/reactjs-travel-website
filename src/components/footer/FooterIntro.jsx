import React, {useState} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FooterIntro = () => {
	//**************** variables ****************//
	const [state] = useState({
		logo: '/assets/footer/logo.png',
		intro: 'We arrange tours to some of the world\'s most beautiful and famous places.  We offer business travel, group tours, family travel, adventure touring and much more.  We passionately provide services to one client, one destination, one team member, one event, one travel experience at a time.  Our business is Service!',
	});
	return (
		<div className='footer__intro'>
			<div className='footer__intro__img'>
				<LazyLoadImage src={state.logo} alt='footer logo' />
			</div>
			<p className='footer__intro__msg'>{state.intro}</p>
		</div>
	);
}

export default FooterIntro;