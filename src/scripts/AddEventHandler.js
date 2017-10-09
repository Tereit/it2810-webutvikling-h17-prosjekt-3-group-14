import React, {Component} from "react";
import Datepicker from './Datepicker';

class AddEventHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            allDay: false,
            date: new Date()
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onAllDayChange = this.onAllDayChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onAddEvent = this.onAddEvent.bind(this);
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    onAllDayChange(event) {
        this.setState({
            allDay: event.target.checked
        });
    }

    onDateChange(value) {
        this.setState({
            date: value
        });
    }

    onAddEvent() {
        this.props.addEvent(this.state.title, this.state.allDay, this.state.date);
        this.props.showCalendar();
    }

    render() {
        return(
            <div className="addEventForm">
                <form>
                    <label>Title:</label><input onChange={this.onTitleChange}/><br />
                    <label>All day?</label><input type="checkbox" onChange={this.onAllDayChange}/><br/>
                    <label>Date:</label><Datepicker change={this.onDateChange} defaultValue={this.state.date}/><br/>
                </form>
                <button onClick={this.onAddEvent}>Add event</button>
                <button onClick={this.props.showCalendar}>Close</button>
            </div>
        )
    }
}

export default AddEventHandler;