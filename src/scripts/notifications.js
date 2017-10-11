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
      notificationTime: null
    };
    // Notification list to display on screen
    this.notifications = null;

    //Bindings
    this.handleChange = this.handleChange.bind(this);
    this.getLocalState = this.getLocalState.bind(this);
    this.setLocalState = this.setLocalState.bind(this);
    this.checkTime = this.checkTime.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.tick = this.tick.bind(this);
    this.automaticNotification = this.automaticNotification.bind(this);
    this.createNotification = this.createNotification.bind(this);
    this.buildNotification = this.buildNotification.bind(this);
    this.saveNotifications = this.saveNotifications.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.logState = this.logState.bind(this);
    this.loadNotifications = this.loadNotifications.bind(this);

  }

  componentDidMount() {
    this.getLocalState('recieveMessage');
    this.notifications = this.refs.notifications;
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    this.loadNotifications();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  logState() {
    console.log('state: ', this.state.automaticNotifications);
  }

  loadNotifications(){
    let notifications = this.getNotifications();
    this.setState({automaticNotification: notifications});
    for (var i = 0; i < notifications.length; i++) {
      console.log(notifications[i]);
  }
}

  addNotification() {
    if (this.state.recieveMessage) {
      this.notifications.addNotification({title: 'Notification', message: 'Test', level: 'info', position: 'tr', children: (
          <div>
            <h2>Test</h2>
          </div>
        )});
    }
  }

  automaticNotification() {
    if (this.state.recieveMessage) {
      for (var i = 0; i < this.state.automaticNotifications.length; i++) {
        if (this.checkTime(this.state.automaticNotifications[i])) {
          this.notifications.addNotification(this.state.automaticNotifications[i]);
          this.state.automaticNotifications.splice([i], 1);
          console.log('Removed notification ', [i]);
        }
      }
    }
  }

  createNotification(title, message, time) {
    const notification = {
      title: title,
      message: message,
      level: 'info',
      position: 'br',
      time: time
    }
    this.setState({
      automaticNotifications: [
        ...this.state.automaticNotifications,
        notification
      ]
    });
    console.log('Notification created!', notification);
    this.saveNotifications();
  }

  saveNotifications() {
    localStorage.setItem('notifications', JSON.stringify(this.state.automaticNotifications));
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

    console.log('notifications: ', notifications);
    console.log('Notifications loaded!');

    return notifications;
  }

  parseDate(dateinfo) {
    dateinfo = dateinfo[0].replace('"', '');
    dateinfo = dateinfo.split('-');
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
  setLocalState(key, state) {
    // Sets the HTML localStorage state of recieveMessage to the correct state
    localStorage.setItem(key, state);
  }

  checkTime(notification) {
    //Requires a date object
    let notifDate = notification.time.getDate();
    let notifMin = notification.time.getMinutes();
    let notifHours = notification.time.getHours();

    if (notifDate === this.state.date.getDate() && notifMin === this.state.date.getMinutes() && notifHours === this.state.date.getHours()) {
      return true;
    } else {
      return false;
    }
  }

  buildNotification() {
    this.createNotification(this.state.title, this.state.message, new Date(this.state.notificationTime));
  }

  handleChange(event) {
    // Changes the state of react component, and in the localstorage
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState({[name]: value});
    this.setLocalState('recieveMessage', value);
  }

  render() {
    return (
      <div>
        <h1>TIME: {this.state.date.toLocaleTimeString()}</h1>
        <br/>
        <input type="checkbox" name="recieveMessage" checked={this.state.recieveMessage} onChange={this.handleChange}/>
        Recieve Messages?<br/>
        <button onClick={this.addNotification}>test</button>
        <NotificationSystem ref="notifications"/>
        <br/>
        <input type="text" name="title" placeholder="title" onChange={this.handleChange}/>
        <br/>
        <br/>
        <input type="text" name="message" placeholder="message" onChange={this.handleChange}/>
        <br/>
        <br/>
        <input type="datetime" name="notificationTime" onChange={this.handleChange}/>
        <br/>
        <button onClick={this.buildNotification}>Add Notification</button>
        {this.logState()}
      </div>
    );
  }
}

export default Notifications;
