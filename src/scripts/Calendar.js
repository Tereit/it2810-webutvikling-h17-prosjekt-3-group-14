import React, {Component} from 'react';

// big calendar
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../css/Calendar.css';

// event handling for the calendar
import {loadEvents, storeEvents} from './Events';
import AddEventHandler from './AddEventHandler';
import ShowEvent from './ShowEvent';

moment().format();
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.addEvent = this.addEvent.bind(this);
        this.showNewEventHandler = this.showNewEventHandler.bind(this);
        this.openNewEventPanel = this.openNewEventPanel.bind(this);
        this.removeEventHandler = this.removeEventHandler.bind(this);
        this.showCalendar = this.showCalendar.bind(this);
        this.display = this.display.bind(this);

        this.state = {
            m: moment(),
            events: [],
            addNewEvent: false,
            showCalendar: true,
            showEvent: false,
            selectedEvent: null
        }
    }

    componentWillMount() {
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

    addEvent(title, allDay, date) {
        const newEvent = {
            title: title,
            allDay: allDay,
            start: date,
            end: date
        };
        let events = [...this.state.events, newEvent];
        this.setState({
            events: events
        });
        storeEvents(events);
    }

    showNewEventHandler() {
        this.setState({
            addNewEvent: true,
            showCalendar: false,
            showEvent: false
        });
    }

    removeEventHandler(event) {
        let events = this.state.events.slice();
        let index = "undefined";
        for(let i = 0; i < events.length; i++) {
            if(event.title === events[i].title) {
                index = i;
                break;
            }
        }
        if(index !== "undefined") {
            events.splice(index, 1);
        }

        this.setState({
            events: events
        });

        storeEvents(events);
    }

    showCalendar() {
        this.setState({
            addNewEvent: false,
            showCalendar: true,
            showEvent: false
        });
    }

    showEvent(event) {
        let currentEvent = {
            title: event.title,
            start: event.start,
            end: event.end,
            allDay: event.allDay
        };
        this.setState({
            addNewEvent: false,
            showCalendar: false,
            showEvent: true,
            selectedEvent: currentEvent
        });
    }

    display() {
        if(this.state.showEvent) {
            return(
                <ShowEvent showCalendar={this.showCalendar} event={this.state.selectedEvent} removeEventHandler={this.removeEventHandler}/>
            )
        } else if(this.state.addNewEvent) {
            return(
                <AddEventHandler moment={this.state.m} addEvent={this.addEvent} showCalendar={this.showCalendar}/>
            )
        } else if(this.state.showCalendar) {
            return(
                <div className="calendar">
                    <div className="menu">
                        <button onClick={this.showNewEventHandler}>New Event</button>
                    </div>
                    <BigCalendar
                        selectable
                        events={this.state.events}
                        defaultDate={new Date(2017, 9, 27)}
                        onSelectEvent={event => this.showEvent(event)}
                    />
                </div>
            )
        }
    }

    render() {
        return (
            this.display()
        );
    }
}

export default Calendar;