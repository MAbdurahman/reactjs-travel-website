import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

export default function ServicesList({ services }) {
	//**************** variables ****************//
	const [current, setCurrent] = useState(0);
	
	//**************** functions ****************//
	const showDetails = index => {
		setCurrent(index);
	};

	return services.length > 0
		? services.map((service, index) => (
				<div className='services__list' key={index}>
					<h4
						className={`services__list__heading ${
							current === index
								? 'services__list__heading--active'
								: 'services__list__heading--normal'
						}`}
						onClick={() => showDetails(index)}
					>
						<BiChevronRight
							size={20}
							className={`${
								current === index
									? 'services__rotate'
									: 'services__back'
							}`}
							color={`${current === index ? '#ff4d58' : 'black'}`}
						/>
						{service.heading}
					</h4>
					<p
						className={`services__list__details ${
							current === index ? 'services__list__details--show' : ''
						}`}
					>
						{service.p}
					</p>
				</div>
		  ))
		: '';
}
