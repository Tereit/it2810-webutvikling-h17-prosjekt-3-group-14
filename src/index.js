import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
