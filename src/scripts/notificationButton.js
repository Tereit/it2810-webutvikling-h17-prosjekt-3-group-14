import React, {Component} from 'react';

class NotificationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {recieveMessage: true};
    this.message = this.message.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getLocalState = this.getLocalState.bind(this);
    this.setLocalState = this.setLocalState.bind(this);
    this.checkTime = this.checkTime.bind(this);

  }

  componentDidMount(){
    this.getLocalState();
    const timeTest = new Date(2017, 10, 3, 11, 3);
    console.log(this.checkTime(timeTest));
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

  message(){
    if (this.state.recieveMessage) {
        window.alert('test');
    }
  }

  checkTime(notificationTime){
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
    this.getLocalState();
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
        <button onClick={this.message}>click me</button>
      </div>
    );
  }
}

export default NotificationButton;
