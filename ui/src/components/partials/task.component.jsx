import React, {Component} from 'react';

import {NavComponent} from "../structural/nav.component.jsx";
import {TaskDueDateFormComponent} from "../forms/task-due-date-form.component.jsx";

export class TaskComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      task: {},
      params: props.match.params
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/tasks/'+ this.state.params.id)
      .then(results => {
        return results.json();
      }).then(data => {
        console.log('task', data);

        this.setState({ task: data });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <NavComponent back="/" title={this.state.task.title}></NavComponent>

        <div className="col-sm-9">

          <TaskDueDateFormComponent id={this.state.task.id} due={this.state.task.due_at}></TaskDueDateFormComponent>

        </div>
      </div>
    );
  }
}