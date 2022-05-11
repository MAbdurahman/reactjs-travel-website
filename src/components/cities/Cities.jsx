import React from 'react';
import CityImage from './CityImage';
import CityContents from './CityContents';

export default function Cities({ cities, name }) {
	return (
		<div className='cities'>
			<div className='container'>
				<div className='cities__container'>
					<h2 className='heading'>Cities in {name}</h2>
					<div className='row ml-minus-15 mr-minus-15'>
						{cities.length > 0
							? cities.map(city => (
									<div className='col-3 p-15' key={city.id}>
										<div className='cities__body'>
											<CityImage
												img={city.image}
												status={city.status}
											/>
											<CityContents
												name={city.name}
												duration={city.duration}
												price={city.price}
												room={city.room}
												food={city.food}
											/>
										</div>
									</div>
							))
							: `No Travel Cities in ${name}`}
					</div>
				</div>
			</div>
		</div>
	);
}
