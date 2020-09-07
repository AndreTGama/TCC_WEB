import React from 'react';
import PrivateRouter from './PrivateRouter';
import Client from '../pages/Client';
import Routes from './data/Routes';

export default function ClientRoute({ match: { url } }) {
	const LOGGED_ROUTES = Routes.LOGGED_ROUTES(url);

	return (
		<>
			<PrivateRouter
				userTypes={[3]}
				path={LOGGED_ROUTES.HOME}
				exact
				component={Client}
			/>
		</>
	);
}