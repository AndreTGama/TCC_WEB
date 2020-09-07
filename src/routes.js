/* eslint-disable no-else-return */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import parseJwt from './helpers/parseJwt';
import { UserTypeActions } from './redux/ducks/userTypeReducer';
import Navigation from './routes/Navigation';
import LoginRoutes from './routes/LoginRoutes';

export default function () {
	const userType = useSelector((state) => state.userType);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(1);
		const token = localStorage.getItem('@token');
		const id = parseJwt(token) ? parseJwt(token).tipo_usuario : null;
		dispatch(UserTypeActions.updateUserTypeIds(id));
		if (id) {
			dispatch(UserTypeActions.updateActualTypeId(id));
			if (!localStorage.getItem('@actualTypeId'))
				localStorage.setItem('@actualTypeId', id);
		} else if (
			localStorage.getItem('@actualTypeId') &&
			localStorage.getItem('@actualTypeId')
		)
			dispatch(
				UserTypeActions.updateActualTypeId(
					+localStorage.getItem('@actualTypeId')
				)
			);
	}, []);

	if (userType.actualType !== null)
		return (
			<Navigation userTypeId={userType.actualType || userType.types} />
		);
	else return <LoginRoutes />;
}
