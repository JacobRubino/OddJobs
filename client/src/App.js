// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/feedback'
import Navbar from './pages/navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
