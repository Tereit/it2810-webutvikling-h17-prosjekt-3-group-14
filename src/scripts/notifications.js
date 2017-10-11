import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recieveMessage: true,
      date: new Date(),
      automaticNotifications: [],
      title: '',
      message: '',
      notificationDate: null
    };
    // Notification list to display on screen
    this.notifications = null;

    //Bindings
    this.handleChange = this.handleChange.bind(this);
    this.getLocalState = this.getLocalState.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.checkDateAndTime = this.checkDateAndTime.bind(this);
    this.tick = this.tick.bind(this);
    this.automaticNotification = this.automaticNotification.bind(this);
    this.createNotification = this.createNotification.bind(this);
    this.buildNotification = this.buildNotification.bind(this);
    this.saveNotifications = this.saveNotifications.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.loadNotifications = this.loadNotifications.bind(this);

  }

  componentDidMount() {
    this.getLocalState('recieveMessage');
    //this.loadNotifications();
    this.notifications = this.refs.notifications;
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  loadNotifications(){
    let notifications = this.getNotifications();
    this.setState({automaticNotification: notifications});
    for (var i = 0; i < notifications.length; i++) {
      this.state.automaticNotifications.push(notifications[i]);
      console.log(notifications[i]);
  }
  console.log('Notifications loaded!');
}

  automaticNotification() {
    if (this.state.recieveMessage) {
      for (var i = 0; i < this.state.automaticNotifications.length; i++) {
        if (this.checkDateAndTime(this.state.automaticNotifications[i])) {
          this.notifications.addNotification(this.state.automaticNotifications[i]);
          this.state.automaticNotifications.splice([i], 1);
        }
      }
    }
  }

  createNotification() {
    const notification = {
      title: this.state.title,
      message: this.state.message,
      level: 'info',
      position: 'br',
      time: this.state.notificationDate
    }
    this.setState({
      automaticNotifications: [
        ...this.state.automaticNotifications,
        notification
      ]
    });
    this.saveNotifications();
  }

  saveNotifications() {
    localStorage.setItem('notifications', JSON.stringify(this.state.automaticNotifications));

    console.log(this.state.automaticNotifications);

    console.log('Notifications saved!');
  }

  getNotifications() {
    let notifications = [];
    let inputString = JSON.parse(localStorage.getItem('notifications'));
    for (var i = 0; i < inputString.length; i++) {
      let time = this.parseDate(inputString[i].time.split('T'));
      let notification = {
        title: inputString[i].title,
        message: inputString[i].message,
        level: inputString[i].level,
        position: inputString[i].position,
        time: time
      }
      notifications.push(notification);
    }

    return notifications;
  }

  parseDate(dateinfo) {
    dateinfo = dateinfo[0].replace('"', '');
    dateinfo = dateinfo.split('-');
    console.log(dateinfo[0], dateinfo[1]-1, parseInt(dateinfo[2]));
    return new Date(dateinfo[0], dateinfo[1] - 1, parseInt(dateinfo[2]));
  }

  tick() {
    // Makes sure that the document has an updated date
    this.setState({date: new Date()});
    this.automaticNotification();
  }

  getLocalState(key) {
    // Checks the browsers HTML localstorage for a state of recieveMessage.
    const localstate = localStorage.getItem(key);
    if (localstate === 'true') {
      this.setState({recieveMessage: true});
    } else if (localstate === 'false') {
      this.setState({recieveMessage: false});
    }
  }
  setLocalStorage(key, state) {
    // Sets the HTML localStorage state of recieveMessage to the correct state
    localStorage.setItem(key, state);
  }

  checkDateAndTime(notification) {
    //Requires a date object
    let notifDate = notification.time.getDate();

    // USED FOR CHECKING TIME
    //let notifMin = notification.time.getMinutes();
    //let notifHours = notification.time.getHours();

    if (notifDate === this.state.date.getDate()) {
      return true;
    } else {
      return false;
    }
  }

  buildNotification() {
    this.createNotification(this.state.title, this.state.message, new Date(this.state.notificationDate));
  }

  handleChange(event) {
    // Changes the state of react component, and in the localstorage
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});
    this.setLocalStorage('recieveMessage', value);
  }

  render() {
    return (
      <div>
        <h1>TIME: {this.state.date.toLocaleTimeString()}</h1>
        <br/>
        <input type="checkbox" name="recieveMessage" checked={this.state.recieveMessage} onChange={this.handleChange}/>
        Recieve Messages?<br/>
        <br/>
        <input type="text" name="title" placeholder="title" onChange={this.handleChange}/>
        <br/>
        <br/>
        <input type="text" name="message" placeholder="message" onChange={this.handleChange}/>
        <br/>
        <br/>
        <input type="datetime" name="notificationDate" onChange={this.handleChange}/>
        <br/>
        <button onClick={this.createNotification}>Add Notification</button>
        <NotificationSystem ref="notifications"/>
      </div>
    );
  }
}

export default Notifications;
