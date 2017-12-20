import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {NavComponent} from "../structural/nav.component.jsx";
import {TaskAddFormComponent} from "../forms/task-add-form.component.jsx";
import {MarkTaskCompletedComponent} from "../mini/mark-task-complete.component.jsx";

export class ListComponent extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      showHiddenTasks: false,
      showHiddenTasksText: 'Show completed',
      list: {},
      tasks: [],
      tasksHidden: []
    }

    this.toggleHiddenLists = this.toggleHiddenLists.bind(this);
    this.state.params = props.match.params;
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/lists/'+ this.state.params.id)
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ list: data });
      }).catch(e => {
        console.log('Error: ', e);
      });

    fetch('http://localhost:8000/api/lists/tasks/'+ this.state.params.id)
      .then(results => {
        return results.json();
      }).then(data => {
        console.log('new tasks', data);

        let tasks = data.map((task) => {
          return (
            <li key={task.id} className="list-group-item">
              <MarkTaskCompletedComponent id={task.id} status={task.status}></MarkTaskCompletedComponent>
              <Link to={{
                pathname: '/tasks/'+ task.id
              }}>{task.title}</Link>
            </li>
          )
        });

        this.setState({ tasks: tasks });
      }).catch(e => {
        console.log('Error: ', e);
      });

    fetch('http://localhost:8000/api/lists/tasks/'+ this.state.params.id +'/completed')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log('hidden tasks', data);

        let tasksHidden = data.map((task) => {
          return (
            <li key={task.id} className="list-group-item">
              <MarkTaskCompletedComponent id={task.id} status={task.status}></MarkTaskCompletedComponent>
              <Link to={{
                pathname: '/tasks/'+ task.id
              }}>{task.title}</Link>
            </li>
          )
        });

        this.setState({ tasksHidden: tasksHidden });
      }).catch(e => {
        console.log('Error: ', e);
      });
  }

  toggleHiddenLists() {
    let toggle = this.state.showHiddenTasks ? false : true;
    let text = this.state.showHiddenTasks ? 'Show completed' : 'Hide completed';
    this.setState({
      showHiddenTasks: toggle,
      showHiddenTasksText: text
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <NavComponent back="/" title={this.state.list.title}></NavComponent>

        <div className="col-sm-9">

          <TaskAddFormComponent listId={this.state.params.id}></TaskAddFormComponent>

          <ul className="list-group task-list">
            {this.state.tasks}
          </ul>

          <a onClick={this.toggleHiddenLists} className="toggleHiddenListsLink">{this.state.showHiddenTasksText}</a>

          <ul className="list-group task-list">
            {this.state.showHiddenTasks ? this.state.tasksHidden : null}
          </ul>

        </div>
      </div>
    );
  }
}