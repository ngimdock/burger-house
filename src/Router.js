import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/homePage/Home';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" >
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;