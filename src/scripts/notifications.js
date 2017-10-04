import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {recieveMessage: true, date: new Date()};
    this.notifications = null;
    this.automaticNotifications = {};

    //Bindings
    this.handleChange = this.handleChange.bind(this);
    this.getLocalState = this.getLocalState.bind(this);
    this.setLocalState = this.setLocalState.bind(this);
    this.checkTime = this.checkTime.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this.tick = this.tick.bind(this);
    this.automaticNotification = this.automaticNotification.bind(this);

  }

  componentDidMount(){
    this.getLocalState();
    this.notifications = this.refs.notifications;
    this.timerID = setInterval(
      () => this.tick(),
       1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  addNotification(){
    console.log('i am called');
    if (this.state.recieveMessage) {
      //event.preventDefault();
      this.notifications.addNotification({
        title: 'Notification',
        message: 'Test',
        level: 'info',
        position: 'br',
        children: (
          <div>
            <h2>Test</h2>
          </div>
        )
      });
    }
  }

  automaticNotification(){
    const testDate = new Date(2017, 4, 9, 11, 46, 15);
    if (this.state.date.toLocaleTimeString() ===
        testDate.toLocaleTimeString()) {
          console.log('time is equal');
          this.addNotification();
    }
  }

  tick(){
    this.setState({
      date: new Date()
    });
    this.automaticNotification();
  }

  getLocalState(){
    const localstate = localStorage.getItem('recieveMessage');
    if (localstate === 'true') {
      this.setState({
        recieveMessage: true
      });
    } else if (localstate === 'false') {
      this.setState({
        recieveMessage: false
      });
  }
}

  setLocalState(state){
    localStorage.setItem('recieveMessage', state);
  }

  checkTime(notificationTime){
    //Requires a date object
    var notifDate = notificationTime.getDate();
    var notifMin = notificationTime.getMinutes();
    var notifHours = notificationTime.getHours();

    if (notifDate === this.state.date.getDate() &&
        notifMin === this.state.date.getMinutes() &&
        notifHours === this.state.date.getHours()) {
      return true;
    } else {
      return false;
    }
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.setLocalState(value);
  }

  render(){
    return(
      <div>
        <h1>TIME: {this.state.date.toLocaleTimeString()}</h1>
        <br />
        <input
        type="checkbox"
        name="recieveMessage"
        checked={this.state.recieveMessage}
        onChange={this.handleChange} />
        Recieve Messages?<br />
        <button onClick={this.addNotification}>test</button>
        <NotificationSystem ref="notifications" />
      </div>
    );
  }
}

export default Notifications;
