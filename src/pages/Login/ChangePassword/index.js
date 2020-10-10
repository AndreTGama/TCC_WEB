import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Routes from '../../../routes/data/Routes';
import api from '../../../services/api';

export default function Index(){

	const history = useHistory();
	const [password, setPassword] = useState('');
	const [confirmedPassword, setConfirmedPassword] = useState('');

	useEffect(()=>{
		if(!localStorage.getItem('@idusuario')){
			alert('não existe');
			history.push('/');
		}
	},[])


	async function handleSubmit(event){

		event.preventDefault();

		if(password === confirmedPassword){
			const data = {
				password:password,
				confirmedPassword:confirmedPassword,
				idUser:localStorage.getItem('@idusuario'),
			}
			const response = await api.post('/user/change-password', data);
			if (response.data.error === true){
				alert(response.data.message);
				history.push(Routes.LOGIN);
			}
			else alert(response.data.message);

		}else alert('As senhas não são iguais');

	}


	return (
		<section className="background_page_form">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-7 col-md-9">
						<div className="card" id="login-card">
							<div className="card-body">
								<form
									className="login_page_form"
									onSubmit={handleSubmit}
								>
									<div className="row justify-content-center text-center">
										<div className="form-group col-10">
											<label htmlFor="loginEmail">
												<b> Digite sua nova senha </b>
											</label>
											<input
												type="text"
												name="loginEmail"
												id="loginEmail"
												placeholder="Digite sua nova senha"
												className="form-control"
												value={password}
												onChange={(event) =>
													setPassword(event.target.value)
												}
												required
											/>
										</div>
									</div>
									<div className="row justify-content-center text-center">
										<div className="form-group col-10">
											<label htmlFor="loginEmail">
												<b> Confirme sua nova senha </b>
											</label>
											<input
												type="text"
												name="loginEmail"
												id="loginEmail"
												placeholder="Confirme sua nova senha"
												className="form-control"
												value={confirmedPassword}
												onChange={(event) =>
													setConfirmedPassword(event.target.value)
												}
												required
											/>
										</div>
									</div>
									<div className="row justify-content-center text-center">
										<div className="col-10 form-group">
											<button
												type="submit"
												className="btn btn-primary btn-block"
												id="loginBtn"
											>
												Trocar a senha
											</button>
										</div>
									</div>
								</form>
								<div className="row justify-content-center text-center">
									<div className="col-10 form-group"> </div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}