import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './scripts/App';
import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
