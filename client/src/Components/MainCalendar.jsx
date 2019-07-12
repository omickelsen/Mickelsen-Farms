import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NCalendar from '../components/Calendar';
import EventModal from '../components/EventModal';
import NewEventModal from '../components/NewEventModal';
import moment from 'moment';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Styles/App.css';


export default class Calendar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      modalOpen: false,
      newModalOpen: false,
      selectedEvent: null,
      events: [

      ]
    };
  }

  toggleModal = ( evt ) => {
    if ( !this.state.modalOpen ) {
      this.setState( { modalOpen: !this.state.modalOpen, selectedEvent: evt } );
    }
    else {
      this.setState( { modalOpen: !this.state.modalOpen } );
    }
  }

  toggleNewModal = () => {
    this.setState( { newModalOpen: !this.state.newModalOpen } );
  }

  addEvent = ( evt ) => {
    var events = this.state.events;
    evt["id"] = events.length;
    var startHours = Math.floor( evt["startTime"] / 3600 );
    var startMinutes = startHours;
    if ( startHours !== 0 ) {
      startMinutes = evt["startTime"] % ( 3600 * Math.floor( startHours ) ) / 60;
    }
    else {
      startMinutes = evt["startTime"] / 60;
    }
    var endHours = Math.floor( evt["endTime"] / 3600 );
    var endMinutes = endHours;
    if ( endHours !== 0 ) {
      endMinutes = evt["endTime"] % ( 3600 * Math.floor( endHours ) ) / 60;
    }
    else {
      endMinutes = evt["endTime"] / 60;
    }
    evt["start"].setHours( startHours );
    evt["start"].setMinutes( startMinutes );
    evt["end"].setHours( endHours );
    evt["end"].setMinutes( endMinutes );
    var recurringDays = evt["recurringDays"];
    var recurringDayValues = [];
    var recurrenceStart = evt["start"];
    var recurrenceEnd = evt["end"];
    for ( let obj of recurringDays ) {
      recurringDayValues.push( obj["value"] );
    }
    evt["recurringDays"] = recurringDayValues;
    if ( evt["type"] === "BI" ) {
      let startDate = moment( evt["start"] );
      let startDateDay = startDate.day();
      let endDate = moment( evt["end"] );
      while ( startDate.isBefore( endDate ) ) {
        if ( recurringDayValues.indexOf( startDate.day() ) !== -1 ) {
          let evtCopy = Object.assign( {}, evt );
          evtCopy["start"] = startDate.toDate();
          evtCopy["end"] = startDate.toDate();
          evtCopy["end"].setHours( evt["end"].getHours() );
          evtCopy["end"].setMinutes( evt["end"].getMinutes() );
          evtCopy["recurrenceStart"] = recurrenceStart;
          evtCopy["recurrenceEnd"] = recurrenceEnd;
          events.push( evtCopy );
        }
        let startDateClone = moment( startDate );
        let nextDateDay = startDateClone.add( 1, "days" ).day();
        if ( nextDateDay === startDateDay ) {
          startDate = startDate.add( 8, "days" );
        }
        else {
          startDate = startDate.add( 1, "days" );
        }
      }
    }
    else if ( evt["type"] === "Week" ) {
      let startDate = moment( evt["start"] );
      let endDate = moment( evt["end"] );
      while ( startDate.isBefore( endDate ) ) {
        if ( recurringDayValues.indexOf( startDate.day() ) !== -1 ) {
          let evtCopy = Object.assign( {}, evt );
          evtCopy["start"] = startDate.toDate();
          evtCopy["end"] = startDate.toDate();
          evtCopy["end"].setHours( evt["end"].getHours() );
          evtCopy["end"].setMinutes( evt["end"].getMinutes() );
          evtCopy["recurrenceStart"] = recurrenceStart;
          evtCopy["recurrenceEnd"] = recurrenceEnd;
          events.push( evtCopy );
        }
        startDate = startDate.add( 1, "days" );
      }
    }
    else if ( evt["type"] === "Month" ) {
      let startDate = moment( evt["start"] );
      let endDate = moment( evt["end"] );
      while ( startDate.isBefore( endDate ) ) {
        let evtCopy = Object.assign( {}, evt );
        evtCopy["start"] = startDate.toDate();
        evtCopy["end"] = startDate.toDate();
        evtCopy["end"].setHours( evt["end"].getHours() );
        evtCopy["end"].setMinutes( evt["end"].getMinutes() );
        evtCopy["recurrenceStart"] = recurrenceStart;
        evtCopy["recurrenceEnd"] = recurrenceEnd;
        events.push( evtCopy );
        startDate = startDate.add( 1, "month" );
      }
    }
    else {
      events.push( evt );
    }
    this.setState( { events: events } );
    this.close();
  }

  deleteEvent = ( id ) => {

    const events = this.state.events.filter( event => event.id !== id )
    this.setState( { events: events } )
  }

  close = () => {
    this.setState( { newModalOpen: false, modalOpen: false } );
  }

  render() {
    return (
      <section className="calendar" id="calendar">
        <div className="App">
          <h1>Calendar</h1>

          <div id="calendarDiv">
            <NCalendar events={this.state.events} onSelectEvent={( evt ) => { this.toggleModal( evt ) }} />
          </div>
          <Button id="eventButton" bsStyle="primary" onClick={this.toggleNewModal}>Add an Event</Button>
          <EventModal
            isOpen={this.state.modalOpen}

            toggle={this.toggleModal}

            evt={this.state.selectedEvent}

            deleteEvent={this.deleteEvent}

            close={this.close} />
          <NewEventModal isOpen={this.state.newModalOpen} toggle={this.toggleNewModal} addEvent={this.addEvent} close={this.close} />
        </div>
      </section>

    );
  }
}

