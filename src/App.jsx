import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Contact from './pages/Contact';
import Header from './components/Header/Header';

const App = () => (
  <HashRouter>
    <div>
      <Header />
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/forms" component={Forms}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </div>
  </HashRouter>
);

export default App;
