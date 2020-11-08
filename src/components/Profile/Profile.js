import React, { useState, useEffect } from 'react';
import parseJwt from '../../helpers/parseJwt';
import api from '../../services/api';

export default function Profile() {

	const [Password, setPassword] = useState('');
	const [NameUser, setNameUser] = useState('');
	const [Email, setEmail] = useState('');
	const [PostCode, setPostCode] = useState('');
	const [Street, setStreet] = useState('');
	const [Number, setNumber] = useState('');
	const [District, setDistrict] = useState('');
	const [City, setCity] = useState('');
	const [State, setState] = useState('');
	const [Country, setCountry] = useState('');
	const [DddTel, setDddTel] = useState(null);
	const [DddCel, setDddCel] = useState(null);
	const [TelNumber, setTelNumber] = useState(null);
	const [CelNumber, setCelNumber] = useState(null);
	const [Cpf, setCpf] = useState('');
	const [Cnpj, setCnpj] = useState('');

	 async function loadClient() {
			const token = localStorage.getItem('@token');
			const tokenUsuario = parseJwt(token);
			console.log(token);

			// const {data} = await api.post('/services/view/info-user');
			// if(data.error === true){
			// 	console.log('Erro');
			// }
			// else{

			// }
		}
		useEffect(() => {
			loadClient();
		},[]);

	return (
		<>
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						fon
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	);
}
