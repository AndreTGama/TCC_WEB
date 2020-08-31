import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import env from './env';

function App() {
	return (
		<BrowserRouter basename={env.BASE_NAME}>
			<Routes />
		</BrowserRouter>
	);
}

export default App;