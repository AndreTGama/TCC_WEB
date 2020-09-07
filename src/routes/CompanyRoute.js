import React from 'react';
import PrivateRouter from './PrivateRouter';
import Company from '../pages/Company';
import Routes from './data/Routes';

export default function CompanyRoute({ match: { url } }) {
	const LOGGED_ROUTES = Routes.LOGGED_ROUTES(url);

	return (
		<>
			<PrivateRouter
				userTypes={[2]}
				path={LOGGED_ROUTES.HOME}
				exact
				component={Company}
			/>
		</>
	);
}
