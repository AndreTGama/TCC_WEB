import React from 'react';
import PrivateRouter from './PrivateRouter';
import Administrator from '../pages/Administrator';
import Routes from './data/Routes';

export default function AdministratorRoute({ match: { url } }) {
	const LOGGED_ROUTES = Routes.LOGGED_ROUTES(url);

	return (
		<>
			<PrivateRouter
				userTypes={1}
				path={LOGGED_ROUTES.HOME}
				exact
				component={Administrator}
			/>
		</>
	);
}
