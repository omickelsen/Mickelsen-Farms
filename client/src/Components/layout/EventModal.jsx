
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import moment from 'moment';

export default class EventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  deleteEvent = (id) => {
    this.props.deleteEvent(id)
    .then(() => {
      this.props.close()
    })
  }

  render() {
    var title = "";
    var description = "";
    var startDate = "";
    var endDate = "";
    var startTime = "";
    var endTime = "";
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var recurringDays = [];
    if(this.props.evt != null) {
      title = this.props.evt.title;
      description = this.props.evt.description;
      var dateEndIndex = this.props.evt.start.toString().indexOf(":") - 3;
      startDate = this.props.evt.start.toString().substring(0, dateEndIndex);
      dateEndIndex = this.props.evt.end.toString().indexOf(":") - 3;
      endDate = this.props.evt.end.toString().substring(0, dateEndIndex); 
      var startHours = Math.floor(this.props.evt.timeIn / 3600) % 12;
      startHours = startHours === 0? 12 : startHours;
      var startMinutes = (this.props.evt.timeIn / 60) % 60;
      var startHoursText = "";
      var startMinutesText = "";
      if(startHours < 10) {
        startHoursText = "0" + startHours;
      }
      else {
        startHoursText = "" + startHours;
      }
      if(startMinutes < 10) {
        startMinutesText = "0" + startMinutes;
      }
      else {
        startMinutesText = "" + startMinutes;
      }
      startTime = startHoursText + ":" + startMinutesText;
      var endHours = Math.floor(this.props.evt.timeOut / 3600) % 12;
      endHours = endHours === 0? 12 : endHours;
      var endMinutes = (this.props.evt.timeOut / 60) % 60;
      var endHoursText = "";
      var endMinutesText =  "";
      if(endHours < 10) {
        endHoursText = "0" + endHours;
      }
      else {
        endHoursText = "" + endHours;
      }
      if(endMinutes < 10) {
        endMinutesText = "0" + endMinutes;
      }
      else {
        endMinutesText = "" + endMinutes;
      }
      endTime = endHoursText + ":" + endMinutesText;
      for(var day of this.props.evt.recurringDays) {
        recurringDays.push(days[day]);
      }
      var recurringElement = (<p></p>);
      if(recurringDays.length !== 0) {
        recurringElement = (<p>Recurring Days: {recurringDays.toString()}</p>);
      }
      var recurrenceStart = (<p></p>);
      if(this.props.evt.recurrenceStart !== undefined) {
      let dateEndIndex = this.props.evt.recurrenceStart.toString().indexOf(":") - 3;
      let recurrenceStartDate = this.props.evt.recurrenceStart.toString().substring(0, dateEndIndex);
        recurrenceStart = (<p>Recurrence Start: {recurrenceStartDate}</p>);
      }
      var recurrenceEnd = (<p></p>);
      if(this.props.evt.recurrenceEnd !== undefined) {
      let dateEndIndex = this.props.evt.recurrenceEnd.toString().indexOf(":") - 3;
      let recurrenceEndDate = this.props.evt.recurrenceEnd.toString().substring(0, dateEndIndex); 
        recurrenceEnd = (<p>Recurrence End: {recurrenceEndDate}</p>);
      }

      let timeInAMPM = this.props.evt.timeIn < 43200? ' AM' : ' PM';
      let timeOutAMPM = this.props.evt.timeOut < 43200? ' AM' : ' PM';
      startTime = startTime + timeInAMPM;
      endTime = endTime + timeOutAMPM;

    }
    return (
      <Modal show={this.props.isOpen} onHide={this.props.close} >
        <Modal.Header closeButton>{title}</Modal.Header>
        <Modal.Body>
          <p>Description: {description}</p>
          <p>Start Date: {startDate.toString()}</p>
          <p>End Date: {endDate.toString()}</p>
          <p>Start Time: {startTime}</p>
          <p>End Time: {endTime}</p>
          {recurringElement}
          {recurrenceStart}
          {recurrenceEnd}
          <button onClick={() => this.deleteEvent(this.props.evt._id)}>Delete Event </button>
        </Modal.Body>
      </Modal>
    );
  }
}

EventModal.defaultProps = {
  isOpen: false,
  toggleModal : null,
  evt: null
};

EventModal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  deleteEvent: PropTypes.func,
  evt: PropTypes.object
};

