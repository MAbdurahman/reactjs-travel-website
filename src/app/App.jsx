import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Details from './../pages/Details';
import NotFound from '../pages/NotFound';
import Navigation from './../components/Navigation';
import Hamburger from './../components/Hamburger';
import ModalProvider from './../contexts/providers/modalProvider';
import NavProvider from './../contexts/providers/navProvider';
import DestinationsProvider from './../contexts/providers/destinationsProvider';
import SharedProvider from './../contexts/providers/sharedProvider';
import GalleryProvider from './../contexts/providers/galleryProvider';

export default function App() {
	return (
		<Router>
			<ModalProvider>
				<NavProvider>
					<GalleryProvider>
						<DestinationsProvider>
							<SharedProvider>
								<Hamburger />
								<Navigation />
								<HelmetProvider>
									<Switch>
										<Route path='/' exact component={Home} />
										<Route path='/about' exact component={About} />
										<Route
											path='/details/:id'
											exact
											component={Details}
										/>
										<Route
											path='/contact'
											exact
											component={Contact}
										/>
										<Route component={NotFound} />
									</Switch>
								</HelmetProvider>
							</SharedProvider>
						</DestinationsProvider>
					</GalleryProvider>
				</NavProvider>
			</ModalProvider>
		</Router>
	);
}
