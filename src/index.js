import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import NavComponent from './scripts/navbar'
import registerServiceWorker from './scripts/registerServiceWorker';

ReactDOM.render(<NavComponent />, document.querySelector('navbar'));
registerServiceWorker();
