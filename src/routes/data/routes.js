export default {
	LOGIN: '/',
	FORGOT_PASSWORD: '/esqueceu-senha',
	UPDATE_PASSWORD: '/atualizar-senha',
	VERIFY_CODE: '/verificar-codigo',
	CREATE_USER: '/registro',
	CHANGE_PASSWORD:'/trocar-senha',
	LOGGED_ROUTES: (baseUrl = null) => ({
		INDEX: '/',
		HOME: baseUrl,
	}),
};
