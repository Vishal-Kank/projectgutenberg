import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

import Fiction from './components/category/Fiction';
import Drama from './components/category/Drama';
import Humor from './components/category/Humor';
import History from './components/category/History';
import Philosophy from './components/category/Philosophy';
import Politics from './components/category/Politics';
import Adventure from './components/category/Adventure';
import BookCategory from './components/BookCategory';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={BookCategory} />
            <Route path="/Fiction" component={Fiction} />
            <Route path="/Drama" component={Drama} />
            <Route path="/Humor" component={Humor} />
            <Route path="/Politics" component={Politics} />
            <Route path="/Philosophy" component={Philosophy} />
            <Route path="/History" component={History} />
            <Route path="/Adventure" component={Adventure} />
          </Switch>
        </Router>

      </Provider>
    );

  }
}
export default App;
