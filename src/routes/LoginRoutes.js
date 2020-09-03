import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Routes from './data/Routes';
import Page404 from '../pages/404/NotFound';

export default function LoginRoutes() {
	return (
		<>
			<Switch>
				<Route exact path={Routes.LOGIN} component={Login} />
				<Route path="*" component={Page404} />
			</Switch>
		</>
	);
}
