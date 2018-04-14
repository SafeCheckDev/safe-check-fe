import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Forms from './pages/Forms';
import Contact from './pages/Contact';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
