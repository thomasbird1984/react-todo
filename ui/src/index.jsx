import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import {WrapperComponent} from './components/structural/wrapper.component.jsx';

render(
  <BrowserRouter>
    <div>
      <Route path="/" component={WrapperComponent}/>
    </div>
  </BrowserRouter>,
  document.getElementById('container')
);