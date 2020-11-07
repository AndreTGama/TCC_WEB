import React, { useEffect, useState } from 'react';
import SelectsTypeServices from '../../../components/Selects/SelectsTypeServices';
import api from '../../../services/api';

export default function FormServices(){

	const [ListServices,setListServices] = useState([]);
	const [Price,setPrice] = useState('');
	const [Time,setTime] =  useState('');
	const [Service,setService] = useState('');
	const [IdTypeService,setIdTypeService] = useState(null);

	async function loadServices(){
		const datapost = {
			price:Price,
			time:Time,
			service:Service,
			types_services_id_type_service:IdTypeService
		}
		const {data} = await api.post('/services/company/list-services',datapost);
		if(data.error === true){
			console.log('Erro');
		}
		else{
			setListServices(data.data);
		}

	}

	useEffect(()=>{
		loadServices();
	},[]);
	return (
		<section id="form-services">
			<div className="container">
				<div className="card mt-3">
					<div className="card-body">
						<form onSubmit={loadServices}>
							<div className="row">
								<div className="col-12 col-md-3 col-lg-3">
									<div className="form-group">
										<label htmlFor="exampleFormControlInput1">Preço</label>
										<input type="text"
											className="form-control"
											id="exampleFormControlInput1"
											placeholder="R$150,00"
											onChange={(event) =>
												setPrice(event.target.value)
											}
										/>
									</div>
								</div>
								<div className="col-12 col-md-3 col-lg-3">
									<div className="form-group">
										<label htmlFor="exampleFormControlInput1">Tempo</label>
										<input type="text"
											className="form-control"
											id="idTime"
											placeholder="08:30:00"
											onChange={(event) =>
												setTime(event.target.value)
											}
										/>
									</div>
								</div>
								<div className="col-12 col-md-3 col-lg-3">
									<div className="form-group">
										<label htmlFor="exampleFormControlInput1">Serviço</label>
										<input type="text"
											className="form-control"
											id="service"
											placeholder="Cortar Cabelo"
											onChange={(event) =>
												setService(event.target.value)
											}
										/>
									</div>
								</div>
								<div className="col-12 col-md-3 col-lg-3">
									<label>Selecione o tipo de Serviço</label>
									<SelectsTypeServices setIdTypeService={setIdTypeService} valueSelect={IdTypeService} disabled={false}/>

								</div>
							</div>

							<button type="submit" class="btn btn-primary mt-3">Buscar</button>


						</form>
						<hr />
						<table class="table">
							<thead>
								<tr>
								<th scope="col">#</th>
								<th scope="col">Clientes</th>
								<th scope="col">Serviços</th>
								<th scope="col">Horário</th>
								</tr>
							</thead>
							<tbody>
								{
									ListServices.length ?(
										<>
									{ListServices.map(service =>(
									<tr key={service.id_services_company}>
									<th scope="row">1</th>
									<td>{service.service}</td>
									<td>{service.description}</td>
									<td>{service.time}</td>
									<td>{service.price}</td>
									</tr>
								))}
										</>
									):<p>Não tem nada</p>
								}


							</tbody>
							</table>
					</div>
				</div>
			</div>
		</section>
	);
}


