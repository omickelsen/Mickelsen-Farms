
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, FormControl, FormGroup, Label} from 'react-bootstrap';
import DatePicker from 'react-16-bootstrap-date-picker';
import TimePicker from 'react-bootstrap-time-picker';
import Select from 'react-select';
import moment from 'moment';
import axios from 'axios';


import '../../styles/App.css';
import 'react-select/dist/react-select.css';

export default class NewEventModal extends Component {


  //with database and getting wrong information back correctly.

  constructor(props) {
    super(props);
    this.state = {
      title         : "",
      date          : moment(),
      end_date      : moment(),
      type          : "Single",
      startTime        : (moment().hour() * 3600),
      endTime       : (moment().hour() * 3600) + (5 * 60),
      description   : "",
      recurringDays : [],
      resource: '',
      allDay: false,
      submitted: true
    };
    this.processNewEvent = this.processNewEvent.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
  }
  convertDate = (date) => {
    return moment.utc(date).toDate()
  }

  componentWillReceiveProps(newProps) {
    if(newProps.isOpen && !this.props.isOpen && this.state.submitted) {
      this.setState({
        title: "", 
        date: moment(), 
        end_date: moment(), 
        type: "Single", 
        startTime: (moment().hour() * 3600),
        endTime: (moment().hour() * 3600) + (5 * 60),
        description: "", 
        recurringDays: [], 
        submitted: false});
    }
  }

  processNewEvent() {
    console.log("NewEvent");
    
    if(
      this.state.title !== "" && 
      this.state.description !== "" && 
      !(this.state.recurringDays.length === 0 && 
      (this.state.type === "Week" || this.state.type === "BI"))) {
      try {

          let start = this.state.date.toDate();
          let end = this.state.end_date.toDate();

          let startMilliseconds = (start.getTime() + this.state.startTime * 1000) - 43200000;
          let endMilliseconds = (end.getTime() + this.state.endTime * 1000) - 43200000;

          let newStart = new Date(startMilliseconds);
          let newEnd = new Date(endMilliseconds);

        let evt = {
          title: this.state.title, 
          start: newStart,
          end: newEnd,
          startTime: this.state.startTime, 
          endTime: this.state.endTime,
          recurringDays: this.state.recurringDays, 
          description: this.state.description, 
          type: this.state.type,
          // allDay: this.state.allDay,
          resource: ''
        };

     
        axios.post('/api/event', evt).then(data => {
          evt._id = data.data._id;
          console.log(data);
         
          this.setState({submitted: true});
          this.props.addEvent(evt);

        })
  
    } catch (err) {
          console.log(err);
          
        }
    }
    if(this.state.title === "") {
      
    }
    if(this.state.description === "") {

    }
    if(this.state.recurringDays.length === 0 && (this.state.type === "Week" || this.state.type === "BI")) {
      
    }
  
  }

  

	startTime = (e) => {
		this.setState({startTime: e});
	}

	endTime = (e) => {
		this.setState({endTime: e});
  }
  

  handleEndChange(date) {
    this.setState({end_date: moment(date)});
  
  }

  handleDate = (e) => {
    this.setState({date: moment(e)});
    if(this.state.type === "Single") {
      this.setState({end_date: moment(e)});
    }
  }

  handleType = (e) => {
    if(this.state.type === "Single" && e.target.value !== "Single") {
      return this.setState({type: e.target.value, end_date: moment()});
    } else if(this.state.type !== "Single" && e.target.value === "Single") {
      return this.setState({type: e.target.value, date: moment(), end_date: moment()});
    }
    this.setState({type: e.target.value, date: moment(), end_date: moment()});
  }

  handleDaySelectChange = (e) => {
    this.setState({recurringDays: e});
  }
  

  componentDidMount(){
    return axios.get('/api/event').then(data => {
      console.log(data);
    })
  }
  
  render() {
    return (
      <Modal show={this.props.isOpen} onHide={this.props.close}>
        <Modal.Header closeButton>New Calendar Event</Modal.Header>
        <Modal.Body>

          <FormGroup>
            <Label>Title:</Label>
            <FormControl placeholder="Your event title here..." onChange={(evt)=>{this.setState({title: evt.target.value})}}/>
          </FormGroup>

          <FormGroup>
            <Label>Description:</Label>
            <FormControl placeholder="Your event description here..." onChange={(evt)=>{this.setState({description: evt.target.value})}}/>
          </FormGroup>
 
          <FormGroup>
              <Label>Event Date</Label>
              <DatePicker autoComplete="on" placeholder="Date"
              value={this.state.date.format()} onChange={this.handleDate} dateFormat="MM-DD-YYYY"/>
          </FormGroup>

          <FormGroup>
            <Label>Starting Time: </Label>
						<TimePicker value={this.state.startTime} onChange={this.startTime} step={5} start={'07:00 AM'} />
          </FormGroup>
          
          <FormGroup>
            <Label>Ending Time:</Label>
						<TimePicker value={this.state.endTime} onChange={this.endTime} step={5} start={'07:05 AM'} />
          </FormGroup>

         
          <br/>
          <Button bsStyle="success" onClick={this.processNewEvent}>Add Event</Button>
        </Modal.Body>
      </Modal>

    );
  }
}

NewEventModal.defaultProps = {
  isOpen: false,
  toggleModal : null,
  addEvent: null
};

NewEventModal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  addEvent: PropTypes.func
};
