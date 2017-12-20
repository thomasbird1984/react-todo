import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <nav id="main">
        {this.props.back ? <Link className="header-back-btn" to={this.props.back}>Back</Link> : null }
        <span className="title">{this.props.title}</span>
      </nav>
    );
  }
}