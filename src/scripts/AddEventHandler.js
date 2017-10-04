import React, {Component} from "react";
import Calendar from 'react-input-calendar';

class AddEventHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            allDay: false,
            date: new Date()
        };

        this.onAllDayChange = this.onAllDayChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange() {

    }

    onAllDayChange() {

    }

    onDateChange() {

    }

    render() {
        return(
            <div className="addEventForm">
                <form>
                    <label>Title:</label><input /><br />
                    <label>All day?</label><input type="checkbox"/><br/>
                    <label>Date:</label>
                </form>
            </div>
        )
    }
}

export default AddEventHandler;