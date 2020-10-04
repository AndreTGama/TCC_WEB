import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

export default function Index(){

	const [email,setEmail] = useState('');
	const history = useHistory();

	async function handleSubmit(event){

		event.preventDefault();
		const dataPost ={email};
		const {data} = await api.post('/user/forgot-password',dataPost);
		if (data.error === false)
		{
			alert(data.message);
		} else {
			alert(data.message);
		}


	}

	async function handleCancel(event){

		event.preventDefault();
		history.push('/');

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
												<b> Email </b>
											</label>
											<input
												type="text"
												name="loginEmail"
												id="loginEmail"
												placeholder="Digite seu email"
												className="form-control"
												value={email}
												onChange={(event) =>
													setEmail(event.target.value)
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
												Esqueceu Senha
											</button>
										</div>
									</div>
								</form>
								<div className="row justify-content-center text-center">
									<div className="col-10 form-group"> </div>
								</div>
								<div className="row justify-content-center text-center">
										<div className="col-10 form-group">
											<button
												type="button" onClick={handleCancel}
												className="btn btn-primary btn-block"
												id="CancelBtn"
											>	Cancelar
											</button>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}