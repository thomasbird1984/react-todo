import React, {Component} from 'react';
import $ from 'jquery';

export class TaskDueDateFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due_at: this.props.due
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ due_at: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    $.ajax({
      method: 'POST',
      url: 'http://localhost:8000/api/tasks/'+ this.props.id,
      data: this.state
    }).done(data => {
      console.log('data', data);
    }).fail(e => {
      console.log('Error: ', e);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input type="text" className="form-control" id="due_at" value={this.state.due_at} onChange={this.handleChange} placeholder="Enter due date..." />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">&nbsp;<span className="glyphicon glyphicon-plus"></span></button>
          </span>
        </div>
      </form>
    );
  }
}