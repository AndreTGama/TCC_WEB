export default {
	LOGIN: '/',
	FORGOT_PASSWORD: '/esqueceu-senha',
	UPDATE_PASSWORD: '/atualizar-senha',
	VERIFY_CODE: '/verificar-codigo',
	CREATE_USER: '/registro',
	LOGGED_ROUTES: (baseUrl = null) => ({
		INDEX: '/',
		HOME: baseUrl,
		SERVICES: `${baseUrl}/servico`,
		CREATE_SERVICES: `${baseUrl}/servico/novo`,
		PROFILE: `${baseUrl}/perfil`,
	}),
};
