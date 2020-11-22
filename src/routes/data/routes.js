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
		LIST_COMPANY: `${baseUrl}/empresas`,
		PROFILE_COMPANY: `${baseUrl}/empresas/perfil/:idUser`,
		CREATE_COMPANY: `${baseUrl}/empresas/cadastro`,
		LIST_CLIENTE: `${baseUrl}/clientes`,
		PROFILE_CLIENTE: `${baseUrl}/clientes/perfil/:idUser`,
		CREATE_CLIENTE: `${baseUrl}/clientes/cadastro`,
	}),
};
