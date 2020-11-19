export default {
	LOGIN: '/',
	FORGOT_PASSWORD: '/esqueceu-senha',
	UPDATE_PASSWORD: '/atualizar-senha',
	VERIFY_CODE: '/verificar-codigo',
	CREATE_USER: '/registro',
	LOGGED_ROUTES: (baseUrl = null) => ({
		INDEX: '/',
		HOME: baseUrl,
		ACCEPT: `${baseUrl}/aceitar`,
		ACCEPT_SERVICE: `${baseUrl}/aceitar/:idService`,
		SERVICES: `${baseUrl}/servico`,
		CREATE_SERVICES: `${baseUrl}/servico/novo`,
		PROFILE: `${baseUrl}/perfil`,
		CALENDAR: `${baseUrl}/calendario`,
	}),
};
