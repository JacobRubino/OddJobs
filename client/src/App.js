// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ImageSlider from './pages/Home';
import Feedback from './pages/feedback'
import Navbar from './pages/navbar';
import SliderData from './components/SliderData';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ImageSlider slides={SliderData}/>
        <Switch>
          {/* <Route exact path="/" component={ImageSlider} /> */}
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
