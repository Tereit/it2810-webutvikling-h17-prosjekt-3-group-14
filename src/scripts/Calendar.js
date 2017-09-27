import React, {Component} from 'react';
import Modal from 'react-modal';

// big calendar
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../css/Calendar.css';

// get events for the calendar
import myEvents from './Events';

moment().format();
BigCalendar.momentLocalizer(moment);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.state = {
            isAddNewEventOpen: false
        }
    }

    openModal() {
        this.setState({
            isAddNewEventOpen: true
        });
    }

    closeModal() {
        this.setState({
            isAddNewEventOpen: false
        });
    }

    afterOpenModal() {

    }

    render() {
        return (
            <div className="calendar">
                <button onClick={() => this.openModal()}>New Event</button>
                <BigCalendar
                    events={myEvents}
                    defaultDate={new Date(2017, 9, 27)}
                />
                <Modal
                    isOpen={this.state.isAddNewEventOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Add new event"
                >
                    <form>
                        <label>Title</label><input/><br/>
                        <label>Full Day?</label><input type="checkbox"/>
                    </form>
                    <button onClick={this.closeModal}>Close</button>
                </Modal>
            </div>
        );
    }
}

export default Calendar;