import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'containers/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
