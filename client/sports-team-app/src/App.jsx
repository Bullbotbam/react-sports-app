import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import Calendar from './components/Calendar';
import Chat from './components/Chat';
import Registration from './components/Registration';
import UserManagement from './components/UserManagement';

function App() {
	return (
		<Router>
			<Container>
				<Switch>
					<Route path="/calendar">
						<Calendar />
					</Route>
					<Route path="/chat">
						<Chat />
					</Route>
					<Route path="/registration">
						<Registration />
					</Route>
					<Route path="/user-management">
						<UserManagement />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
