import React, {Component} from 'react';
import CalendarDate from './calendarDate';

export default class CalendarDates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      date: this.props.date, 
      firstDay: new Date(
        this.props.date.getFullYear(),
        this.props.date.getMonth(),
        1
      ),
      lastDay: new Date(
        this.props.date.getFullYear(),
        this.props.date.getMonth() + 1,
        0
      )
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.date != this.state.date) {
      this.setState({
        date: nextProps.date, 
        firstDay: new Date(
          nextProps.date.getFullYear(),
          nextProps.date.getMonth(),
          1
        ),
        lastDay: new Date(
          nextProps.date.getFullYear(),
          nextProps.date.getMonth() + 1,
          0
        )
      });
    }
  }

  isThisToday(currentDate, todayDate, date) {
    currentDate.setHours(0,0,0,0);
    todayDate.setHours(0,0,0,0);
    if(currentDate.toString() == todayDate.toString() &&
      date == todayDate.getDate()) {
      return " currentDate";
    }
    return "";
  }

  render() {
    let firstdayNum = this.state.firstDay.getDay();
    let lastDay = this.state.lastDay.getDate();
    let weekNum = 0, date = 1, week = [];
    let currentDate = this.state.date,
      todayDate = this.state.today;

    while(weekNum <= 5 && date <= lastDay) {
      let dates = [];
      for (let weekDay = 0 ; weekDay < 7 ; weekDay++) {
        if (weekNum == 0  && weekDay < firstdayNum) {
          dates.push(
            <CalendarDate
              key = {"date" + weekNum + weekDay}
              id = {"date" + weekNum + weekDay}
              className = "blank"
            />
          );
        }
        else if (date <= lastDay) {
          dates.push(
            <CalendarDate
              key = {"date" + weekNum + weekDay}
              id = {"date" + weekNum + weekDay}
              className = {"dates"
                + this.isThisToday(currentDate, todayDate, date)}
            >
              {date++}
            </CalendarDate>
          );
        }
        else {
          dates.push(
            <CalendarDate
              key = {"date" + weekNum + weekDay}
              id = {"date" + weekNum + weekDay}
              className = "blank"
            />
          );
        }
      }
      week.push(
        <CalendarDate 
          key = {"week" + weekNum}
          id = {"week" + weekNum}
          className = " datesWeek "
        >
          {dates}
        </CalendarDate>
      );
      weekNum++;
    }

    return (
      <div className = "dateRow">
        {week}
      </div>
    );
  }

}