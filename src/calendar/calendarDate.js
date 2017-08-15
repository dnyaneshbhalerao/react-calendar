import React, {Component} from 'react';

export default class calendarDate extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key = {this.props.id} className = {this.props.className}>
        {this.props.children}
      </div>
    );
  }
}