import React from 'react';

export default function ServicesLeft({heading, subHeading}) {
	return (
		<div className='services__left'>
			<h1 className='services__left__heading'>{heading}</h1>
			<p className='services__left__paragraph'>{subHeading}</p>
		</div>
	);
}
