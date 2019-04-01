import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { GlobalStyleIcon } from './statics/iconfont/iconfont.js';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import Write from './pages/write';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyleIcon />
          <GlobalStyle />
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail' exact component={Detail}></Route>
              <Route path='/Write' exact component={Write}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
