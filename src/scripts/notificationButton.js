import React, {Component} from 'react';

class NotificationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {recieveMessage: true};
    this.message = this.message.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getLocalState = this.getLocalState.bind(this);
    this.setLocalState = this.setLocalState.bind(this);

  }

  componentDidMount(){
    this.getLocalState();
  }

  getLocalState(){
    const localstate = localStorage.getItem('recieveMessage');
    if (localstate === 'true') {
      this.setState({
        recieveMessage: true
      });
      console.log(this.state.recieveMessage);
    } else if (localstate === 'false') {
      this.setState({
        recieveMessage: false
      });
      console.log(this.state.recieveMessage);
    } else {
      console.log('local state corrupted!');
    }
  }

  setLocalState(state){
    console.log(state);
    localStorage.setItem('recieveMessage', state);
    console.log('localstate: ', localStorage.getItem('recieveMessage'));
  }

  message(){
    if (this.state.recieveMessage) {
        window.alert('test');
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
