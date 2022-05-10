import React from 'react';

export default function DestinationDetails({ title, text }) {
	return (
		<div className='destination--info__details'>
			<div className='destination--info__details__head'>{title}</div>
			<div className='destination--info__details__text'>{text}</div>
		</div>
	);
}
