import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NCalendar from './Calendar';
import EventModal from './EventModal';
import NewEventModal from './NewEventModal';
import moment from 'moment';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../styles/App.css';


export default class Calendar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      modalOpen: false,
      newModalOpen: false,
      selectedEvent: null,
      popup: true,
      events: []
    };
  }
componentDidMount(){
 this.addEventsFromMongo()
}

addEventsFromMongo = () => {
  return axios.get("/api/event").then(data => {
    const events = data.data.map(event => ({
        ...event,
        date: new Date(event.date),
        start: new Date(event.start),
        end: new Date(event.end),
      })
    );
    window.console.log(events);
    this.setState({
      events
    });
  });
};
  toggleModal = ( evt ) => {
    if ( !this.state.modalOpen ) {
      this.setState( { modalOpen: !this.state.modalOpen, selectedEvent: evt } );
    }
    else {
      this.setState( { modalOpen: !this.state.modalOpen } );
    }
  };

  toggleNewModal = () => {
    this.setState( { newModalOpen: !this.state.newModalOpen } );
  };

  addEvent = ( evt ) => {

    
    
    var events = this.state.events;
    console.log(events)
    events.push(evt);
    console.log(evt)
    this.setState( { events: events } );
    this.close();
  };

  deleteEvent = (id) => {
    console.log(id)
    //Axios delete call then ,()=> this.addEventsFromMongo()

    return axios.delete(`/api/event/delete/${id}`).then(data => {
      console.log(data);
      
      this.addEventsFromMongo()
    })
    // const events = this.state.events.filter( event => event._id !== id )
    // this.setState( { events: events } )
  };

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
