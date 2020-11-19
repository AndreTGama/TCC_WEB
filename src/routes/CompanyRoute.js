import React from 'react';
import PrivateRouter from './PrivateRouter';
import Company from '../pages/Company';
import Services from '../pages/Company/Services';
import CreateServices from '../pages/Company/Services/Create';
import Profile from '../components/Profile';
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
			<PrivateRouter
				userTypes={[2]}
				path={LOGGED_ROUTES.SERVICES}
				exact
				component={Services}
			/>
			<PrivateRouter
				userTypes={[2]}
				path={LOGGED_ROUTES.CREATE_SERVICES}
				exact
				component={CreateServices}
			/>
			<PrivateRouter
				userTypes={[2]}
				path={LOGGED_ROUTES.PROFILE}
				exact
				component={Profile}
			/>
		</>
	);
}
