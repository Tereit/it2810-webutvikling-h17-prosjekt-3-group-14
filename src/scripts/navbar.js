import React from 'react';
import ReactDOM from 'react-dom';
import '../css/navbar.css';

const NavComponent = React.createClass({
    render: function() {
        return (
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#">Calendar</a>
                        <a href="#">Notes</a>
                        <a href="#">Todo</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                    <div className="narrowLinks">
                        <a href="#" onClick={this.burgerToggle}>Calendar</a>
                        <a href="#" onClick={this.burgerToggle}>Notes</a>
                        <a href="#" onClick={this.burgerToggle}>Todo</a>
                    </div>
                </div>
            </nav>
        );
    },
    burgerToggle: function() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
});

export default NavComponent;
