import React, {Component} from 'react';
import CalendarHeaderNavigation from './calendarHeaderNavigation';
import CalendarHeaderText from './calendarHeaderText';

export default class CalendarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      monthNum: this.props.month,
      year: this.props.year
     };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.date != this.state.date) {
      this.setState({
        date: nextProps.date,
        monthNum: nextProps.month,
        year: nextProps.year
      });
    }
  }

  render() {
    return (
      <div className = "calendarHeader">
        <CalendarHeaderText parentClassName = "calTitle" className = "inline">
          Calendar
        </CalendarHeaderText>
        <CalendarHeaderNavigation
          monthNum = {this.state.monthNum}
          year = {this.state.year}
          onPrev = {this.props.onPrev}
          onNext = {this.props.onNext}
          onRefresh = {this.props.onRefresh}
        />
      </div>
    );
  }

}