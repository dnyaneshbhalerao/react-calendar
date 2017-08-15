import React, {Component} from 'react';

export default class calendarHeaderIcons extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className = {"calIcons "+this.props.className}
        onClick = {this.props.onClick}>
      </span>
    );
  }

}
