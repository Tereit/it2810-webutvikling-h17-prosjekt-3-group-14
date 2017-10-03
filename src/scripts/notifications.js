import React, {Component} from 'react';
import NotificationSystem from 'react-notification-system';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {recieveMessage: true};
    this.notifications = null;

    //Bindings
    this.handleChange = this.handleChange.bind(this);
    this.getLocalState = this.getLocalState.bind(this);
    this.setLocalState = this.setLocalState.bind(this);
    this.checkTime = this.checkTime.bind(this);
    this.addNotification = this.addNotification.bind(this);

  }

  componentDidMount(){
    this.getLocalState();
    this.notifications = this.refs.notifications;
  }

  addNotification(e){
    if (this.state.recieveMessage) {
      e.preventDefault();
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

    var date = new Date();
    if (notifDate === date.getDate() &&
        notifMin === date.getMinutes() &&
        notifHours === date.getHours()) {
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
