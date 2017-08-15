import React, {Component} from 'react';
import CalendarHeader from './calendarHeader';
import CalendarWeek from './calendarWeek';
import CalendarDates from './calendarDates';

export default class CalendarView extends Component {

  constructor(props){
    super(props);
    let date = new Date();
    this.state = {
      dateState: date,
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }

  render() {
    return (
      <div className = "calendar" >
        <CalendarHeader 
          date = {this.state.dateState}
          month = {this.state.month}
          year = {this.state.year}
          onPrev = {this.onPrev.bind(this)}
          onNext = {this.onNext.bind(this)}
          onRefresh = {this.onRefresh.bind(this)}
        />
        <CalendarWeek />
        <CalendarDates date = {this.state.dateState} />
      </div>
    );
  }

  onPrev() {
    let month = this.state.month,
      year = this.state.year,
      lastMonthDate = new Date(year,month, 0);
    this.setState({
      dateState: lastMonthDate,
      month: lastMonthDate.getMonth(),
      year: lastMonthDate.getFullYear()
    });
  }

  onNext() {
    let month = this.state.month,
      year = this.state.year,
      nextMonthDate = new Date(year,month + 1, 1);
    this.setState({
      dateState: nextMonthDate,
      month: nextMonthDate.getMonth(),
      year: nextMonthDate.getFullYear()
    });
  }

  onRefresh() {
    let date = new Date();
    this.setState({
      dateState: date,
      month: date.getMonth(),
      year: date.getFullYear()
    });
  }

}