import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/Login/ForgotPassword';
import Register from '../pages/Login/Register';
import Recovery from '../pages/Login/RecoveryPassword';
import ChangePassword from '../pages/Login/ChangePassword';
import Routes from './data/Routes';
import Page404 from '../pages/404';

export default function LoginRoutes() {
	return (
		<>
			<Switch>
				<Route exact path={Routes.LOGIN} component={Login} />
				<Route exact path={Routes.FORGOT_PASSWORD} component={ForgotPassword} />
				<Route exact path={Routes.CREATE_USER} component={Register} />
				<Route exact path={Routes.VERIFY_CODE} component={Recovery} />
				<Route exact path={Routes.CHANGE_PASSWORD} component={ChangePassword} />
				<Route path="*" component={Page404} />
			</Switch>
		</>
	);
}
