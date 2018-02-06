import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './styles';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

// Containers
import Home from 'containers/Home';
import Gallery from 'containers/Gallery';
import Schedules from 'containers/Schedules';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/schedules" component={Schedules} />
        </Switch>
        <Footer />
      </Layout>
    );
  }
}

export default App;
