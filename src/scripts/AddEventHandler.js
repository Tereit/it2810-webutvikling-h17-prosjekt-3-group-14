import React, {Component} from "react";
import Datepicker from './Datepicker';

class AddEventHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            allDay: false,
            start: new Date(),
            end: new Date(),
            notification: false
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
        this.onAddEvent = this.onAddEvent.bind(this);
    }

    onTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    onCheckboxChange(event) {
        let name = event.target.name;
        this.setState({
            [name]: event.target.checked
        });
    }

    onStartDateChange(value) {
        this.setState({
            start: value
        });
    }

    onEndDateChange(value) {
        this.setState({
            end: value
        });
    }

    onAddEvent() {
        let notification = null;
        if(this.state.notification) {
            notification = {
                notificationTitle: "Reminder!",
                notificationMessage: this.state.title,
                notificationDate: this.state.start
            }
        }
        this.props.addEvent(this.state.title, this.state.allDay, this.state.start, this.state.end, notification);
        this.props.showCalendar();
    }

    render() {
        return(
            <div className="addEventForm">
                <form>
                    <label>Title:</label><input onChange={this.onTitleChange}/><br />
                    <label>All day?</label><input type="checkbox" name="allDay" onChange={this.onCheckboxChange}/><br/>
                    <label>Reminder?</label><input type="checkbox" name="notification" onChange={this.onCheckboxChange}/><br/>
                    <label>Start date:</label><Datepicker change={this.onStartDateChange} defaultValue={this.state.start}/><br/>
                    <label>End date:</label><Datepicker change={this.onStartDateChange} defaultValue={this.state.end}/><br/>
                </form>
                <button onClick={this.onAddEvent}>Add event</button>
                <button onClick={this.props.showCalendar}>Close</button>
            </div>
        )
    }
}

export default AddEventHandler;
