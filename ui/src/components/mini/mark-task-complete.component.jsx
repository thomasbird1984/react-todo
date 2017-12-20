import React, {Component} from 'react';
import $ from 'jquery';

export class MarkTaskCompletedComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.updatedStatus = this.props.status === 'new' ? 'glyphicon glyphicon-unchecked' : 'glyphicon glyphicon-check';
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted() {
    this.updatedStatus = this.props.status === 'new' ? 'completed' : 'new';

    $.ajax({
      method: 'POST',
      url: 'http://localhost:8000/api/tasks/'+ this.props.id,
      data: {
        status: this.updatedStatus
      }
    }).done(data => {
      console.log('data', data);
    }).fail(e => {
      console.log('Error: ', e);
    });
  }

  render() {
    return (
      <span className={this.updatedStatus} onClick={this.toggleCompleted}></span>
    );
  }
}