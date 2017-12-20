import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import {ListsComponent} from "../partials/lists.component.jsx";
import {ListComponent} from "../3partials/list.component.jsx";
import {TaskComponent} from "../partials/task.component.jsx";

export class WrapperComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>

          <Route exact path="/" component={ListsComponent}></Route>
          <Route path="/lists/:id" component={ListComponent}></Route>
          <Route path="/tasks/:id" component={TaskComponent}></Route>

        </div>
      </BrowserRouter>
    );
  }
}