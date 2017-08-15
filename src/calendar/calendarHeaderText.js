import React, {Component} from 'react';

export default class CalendarHeaderText extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {this.props.parentClassName}>
        <h3 className = {this.props.className} >
          {this.props.children}
        </h3>
      </div>
    );
  }

}
