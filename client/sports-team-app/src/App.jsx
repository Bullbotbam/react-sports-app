import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Chat from './components/Chat';
import Registration from './components/Registration';
import UserManagement from './components/UserManagement';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Calendar} />
        <Route path="/chat" component={Chat} />
        <Route path="/registration" component={Registration} />
        <Route path="/user-management" component={UserManagement} />
      </Switch>
    </Router>
  );
}

export default App;
