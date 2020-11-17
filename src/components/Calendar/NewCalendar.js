import React, { Component, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import api from '../../services/api';

const localizer = momentLocalizer(moment);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cal_events: [
				//State is updated via componentDidMount
			],
		};
	}

	convertDate = (date) => {
		return moment.utc(date).toDate();
	};

	componentDidMount() {
		api.get('/calendar/client/list-calendar')
			.then((response) => {
				console.log(response.data);
				let appointments = response.data;

				for (let i = 0; i < appointments.length; i++) {
					appointments[i].start = this.convertDate(
						appointments[i].day_commitment
					);
					appointments[i].end = this.convertDate(
						appointments[i].day_commitment
					);
				}
				console.log(appointments);
				this.setState({
					cal_events: {
						start: moment().toDate(),
						end: moment().add(1, 'days').toDate(),
						title: 'teste',
					},
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="calendarApp">
				<Calendar
					drilldownView="agenda"
					localizer={localizer}
					defaultDate={new Date()}
					defaultView="month"
					events={this.state.cal_events}
					style={{ height: '50vh' }}
					views={['month', 'week', 'agenda']}
				/>
			</div>
		);
	}
}

export default App;
