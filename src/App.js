import React from 'react';
// import logo from './logo.svg';

import Issues from './components/issues';

import Issue from './components/issue';

import CreateIssue from './components/create_issue';

import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Route from 'react-router-dom/Route';


function App() {
  
  return (
    <Router>
        <div className="App">
        <Route path="/" exact strict component={Issues}>
        </Route>
        <Route path="/issues/" exact component={Issues}>
        </Route>
        <Route path="/issue/:id" exact component={Issue}>
        </Route>
        <Route path="/create_issue" exact component={CreateIssue}>
        </Route>
        </div>
    </Router>
  );
}

export default App;
