import React, { useState } from 'react';
import api from '../../../services/api';

export default function Index(){


	const [code, setCode] = useState('');

	async function handleSubmit(event){

		event.preventDefault();
		const response = await api.post('/user/verifyCode', {
			code
		});


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
												value={code}
												onChange={(event) =>
													setCode(event.target.value)
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
												value={code}
												onChange={(event) =>
													setCode(event.target.value)
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