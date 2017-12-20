import React, {Component} from 'react';
import jQuery from 'jquery';

export class TaskAddFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      listId: props.listId
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    jQuery.ajax({
      method: 'POST',
      url: 'http://localhost:8000/api/tasks',
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
          <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.handleChange} placeholder="Enter title..." />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">&nbsp;<span className="glyphicon glyphicon-plus"></span></button>
          </span>
        </div>
      </form>
    );
  }
}