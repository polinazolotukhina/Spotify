import React from "react";
// import DayPicker, { DateUtils } from "react-day-picker-substyled";
import DayPicker from "react-day-picker";

const selectedDayStyle = {
  color: '#FFF',
  backgroundColor: '#4A90E2',
  ':hover': {
    backgroundColor: '#4A90E2'
  }
};

const style = {
  day: {
    '&selected': selectedDayStyle,

    ':focus': {
      zIndex: 1
    },

    ':hover': {
      backgroundColor: '#f2f2f2'
    }
  },
};

export default class SelectableDay extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        selectedDay: null
      };
  }



  handleDayClick(e, day, modifiers) {
    this.setState({
      selectedDay: modifiers.indexOf("selected") > -1 ? null : day
    });
  }

  render() {
    const { selectedDay } = this.state;

    return (
      <div>
        <DayPicker
          modifiers={{
            selected: (day, {isToday, isOutside}) => !isOutside && DateUtils.isSameDay(selectedDay, day)
          }}
          onDayClick={ this.handleDayClick.bind(this) }
          style={style} className="as"
        />
        <p>
          Selected: { selectedDay && selectedDay.toLocaleDateString() }
        </p>
      </div>
    );
  }
}
