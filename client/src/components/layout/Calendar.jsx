import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';


moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

export default class Calendar extends BigCalendar {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.propGetter = this.propGetter.bind(this);
  
  }

  propGetter(evt, start, end, isSelected) {
    var style = {};
    if(evt.color) {
      style.fontSize="12px";
      style.backgroundColor = evt.color;
      
    }
    return {style: style};
  }

  render() {
    return (
      <BigCalendar 
        culture='en-GB'
        events={this.props.events}
        onSelectEvent={this.props.onSelectEvent}
        eventPropGetter={this.propGetter}
      />
    );
  }
}

Calendar.defaultProps = {
  events: [],
  onSelectEvent:  null,
  popup:true
};

Calendar.propTypes = {
    events: PropTypes.array,
    onSelectEvent: PropTypes.func
};
