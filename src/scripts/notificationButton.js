var React, {Component} = require('react');
var ReactDOM = require('react-dom');
var NotificationSystem = require('react-notification-system');

class NotificationButton extends Component {
    constructor (props){
        super(props);
        this._addNotification.bind(this);
    }

    _notificationSystem = null

  _addNotification (event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'info',
      autoDismiss: 3,
      position: 'tc',
    });
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  render() {
      return(
      <div>
        <button onClick={this._addNotification}>Add notification</button>
        <NotificationSystem ref="notificationSystem" />
      </div>
  )}
};

export default NotificationButton;
