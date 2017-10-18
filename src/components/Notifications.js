// IMPORTANT NOTICE ON NOTIFICATIONS SYSTEM:
// The system does not work optimal. Because of notifications being based on dats
// it was hard to check if the notifications was displayed.

import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.notifications = null;
    this.checkDateAndTime = this.checkDateAndTime.bind(this);
    this.tick = this.tick.bind(this);
    this.automaticNotification = this.automaticNotification.bind(this);
  }

  componentDidMount() {
    this.notifications = this.props.notifications;
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentWillReceiveProps() {
    console.log(this.props.notifications);
  }

  automaticNotification() {
    // Displays the notifications automatically when the date is correct
    if (this.state.recieveMessage) {
      for (var i = 0; i < this.state.automaticNotifications.length; i++) {
        if (this.checkDateAndTime(this.state.automaticNotifications[i])) {
          this.notifications.addNotification(this.state.automaticNotifications[i]);
          this.state.automaticNotifications.splice([i], 1);
        }
      }
    }
  }

  tick() {
    // Makes sure that the document has an updated date
    this.setState({date: new Date()});
    this.automaticNotification();
  }

  checkDateAndTime(notification) {
    // Checks if the notifications date is the same as today, and displays is if the date is correct
    let notifDate = notification.time.getDate();

    if (notifDate === this.state.date.getDate()) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <NotificationSystem ref="notifications"/>
      </div>
    );
  }
}

export default Notifications;
