import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Adrenaline from './components/pages/Adrenaline';
import Holidays from './components/pages/Holidays';
import Adventure from './components/pages/Adventure';
import Mystery from './components/pages/Mystery';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/adrenaline' component={Adrenaline} />
          <Route path='/holidays' component={Holidays} />
          <Route path='/adventure' component={Adventure} />
          <Route path='/mystery' component={Mystery} />
        </Switch>
      </Router>
    </>
  );
};

export default App;