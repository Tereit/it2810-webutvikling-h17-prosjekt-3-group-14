import React, {Component} from 'react';

// displays information about the selected event and gives the user the option to delete it
class ShowEvent extends Component {
    constructor(props) {
        super(props);
        this.removeEvent = this.removeEvent.bind(this);
    }

    removeEvent() {
        this.props.removeEventHandler(this.props.event);
        this.props.showCalendar();
    }

    render() {
        return(
            <div className="showEvent">
                <p>Title: {this.props.event.title}</p>
                <p>Start date: {this.props.event.start.getDate()}/{this.props.event.start.getMonth()}/{this.props.event.start.getFullYear()}</p>
                <p>End date: {this.props.event.end.getDate()}/{this.props.event.end.getMonth()}/{this.props.event.end.getFullYear()}</p>
                <button onClick={this.removeEvent}>Remove event</button>
                <button onClick={this.props.showCalendar}>Close</button>
            </div>
        )
    }
}

export default ShowEvent;