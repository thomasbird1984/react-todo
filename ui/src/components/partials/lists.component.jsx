import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

export class ListsComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      lists: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/lists')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log('lists', data);
        let lists = data.map((list) => {
          return (
            <li key={list.id}><Link to={{
              pathname: '/lists/'+ list.id
            }}>{list.title}</Link></li>
          )
        });

        this.setState({ lists: lists });
    })
  }

  render() {
    return (
      <div className="col-sm-9">

        <h2>Lists</h2>

        <ul className="nav nav-pills nav-stacked">
          {this.state.lists}
        </ul>

      </div>
    );
  }
}