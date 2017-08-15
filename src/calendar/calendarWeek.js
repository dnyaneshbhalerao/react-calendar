import React, {Component} from 'react';
import {weekDays} from './config/calendarConfig';

export default class CalendarWeek extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let week = weekDays.map( (weekDay, index) => {
      return (
        <div key = {"day-" + index} className = "weekDays" >
          {weekDay}
        </div>
      );
    });

    return (
      <div className = "week" >
        {week}
      </div>
    );
  }

}