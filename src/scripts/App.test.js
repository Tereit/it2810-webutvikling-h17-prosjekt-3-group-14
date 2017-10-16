import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import $ from "jquery";
import 'jquery-ui/themes/base/resizable.css';

window.jQuery = $;
require('jquery-ui/ui/version');
require('jquery-ui/ui/plugin');
require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/mouse');
require('jquery-ui/ui/widgets/resizable');

it('test', () => {
    expect(1).to.equal(1);
});