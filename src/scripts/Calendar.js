import React, {Component} from 'react';

// big calendar
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../css/Calendar.css';

// event handling for the calendar
import myEvents, {loadEvents, storeEvents} from './Events';
import AddEventHandler from './AddEventHandler';

moment().format();
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.setEvents = this.setEvents.bind(this);
        this.getEvents = this.getEvents.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.addEventHandler = this.addEventHandler.bind(this);
        this.openNewEventPanel = this.openNewEventPanel.bind(this);

        this.state = {
            m: moment(),
            addNewEvent: false,
            events: []
        }
    }

    setEvents() {
        storeEvents(this.state.events);
    }

    getEvents() {
        let events = loadEvents();
        this.setState({
            events: events
        });
    }

    openNewEventPanel() {
        this.setState({
            addNewEvent: true
        });
    }

    addEvent() {

    }

    addEventHandler() {
        if(this.state.addNewEvent) {
            return(<AddEventHandler moment={this.state.m}/>);
        } else {
            return(<div className="empty"></div>);
        }
    }

    render() {
        return (
            <div className="calendar">
                <div className="menu">
                    <button onClick={() => this.openNewEventPanel()}>New Event</button>
                    <button onClick={() => this.getEvents()}>Load events</button>
                    <button onClick={() => this.setEvents()}>Store events</button>
                    <button onClick={storeEvents(myEvents)}>Initialize</button>
                    {this.addEventHandler()}
                </div>
                <BigCalendar
                    events={this.state.events}
                    defaultDate={new Date(2017, 9, 27)}
                />
            </div>
        );
    }
}

export default Calendar;