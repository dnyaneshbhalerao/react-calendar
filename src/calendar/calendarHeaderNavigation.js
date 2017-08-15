import React, {Component} from 'react';
import {months} from './config/calendarConfig';
import CalendarHeaderText from './calendarHeaderText';
import CalendarHeaderIcons from './calendarHeaderIcons';

export default class CalendarHeaderNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthNum : this.props.monthNum,
      year : this.props.year
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.monthNum != this.state.monthNum) {
      this.setState({
        monthNum: nextProps.monthNum,
        year: nextProps.year
      });
    }
  }

  render() {
    return (
      <div className = "calRightNavigation">
        <CalendarHeaderText parentClassName = "month" className = "inline">
          {months[this.state.monthNum]}
        </CalendarHeaderText>
        <CalendarHeaderText parentClassName = "year" className = "inline">
          {this.state.year}
        </CalendarHeaderText>
        <CalendarHeaderText parentClassName = "calIcons" className = "inline">
          <CalendarHeaderIcons
            className = "prevMonth glyphicon glyphicon-chevron-left"
            onClick = {this.props.onPrev}
          />
          <CalendarHeaderIcons
            className = "nextMonth glyphicon glyphicon-chevron-right"
            onClick = {this.props.onNext}
          />
          <CalendarHeaderIcons
            className = "glyphicon glyphicon-share-alt"
            onClick = {this.props.onRefresh}
          />
        </CalendarHeaderText>
      </div>
    );
  }

}