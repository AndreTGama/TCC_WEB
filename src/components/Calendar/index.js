import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class App extends Component {
	state = {
		events: [
			{
				start: moment().toDate(),
				end: moment().add(1, 'days').toDate(),
				title: 'teste',
			},
		],
	};

	render() {
		return (
			<div className="calendarApp">
				<Calendar
				  	drilldownView="agenda"
					localizer={localizer}
					defaultDate={new Date()}
					defaultView="month"
					events={this.state.events}
					style={{ height: '50vh' }}
					views={['month', 'week', 'agenda']}
				/>
			</div>
		);
	}
}

export default App;
