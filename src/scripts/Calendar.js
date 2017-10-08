import React, {Component} from 'react';

// big calendar
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../css/Calendar.css';

// event handling for the calendar
import {loadEvents, storeEvents} from './Events';
import AddEventHandler from './AddEventHandler';

moment().format();
BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.addEvent = this.addEvent.bind(this);
        this.addEventHandler = this.addEventHandler.bind(this);
        this.openNewEventPanel = this.openNewEventPanel.bind(this);
        this.removeEvent = this.removeEvent.bind(this);

        this.state = {
            m: moment(),
            addNewEvent: false,
            events: []
        }
    }

    componentWillMount() {
        let events = loadEvents();
        this.setState({
            events: events
        });
    }

    componentWillUnmount() {
        storeEvents(this.state.events);
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
        this.setState({
            events: [...this.state.events, newEvent]
        });
    }

    removeEvent() {

    }

    addEventHandler() {
        if(this.state.addNewEvent) {
            return(<AddEventHandler moment={this.state.m} addEvent={this.addEvent}/>);
        } else {
            return(<div className="empty"></div>);
        }
    }

    render() {
        return (
            <div className="calendar">
                <div className="menu">
                    <button onClick={() => this.openNewEventPanel()}>New Event</button>
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