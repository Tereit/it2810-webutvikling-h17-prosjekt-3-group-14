import React, {Component} from 'react';
import '../css/navbar.css';

class NavComponent extends Component{
    render() {
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
                    <i className="fa fa-bars fa-2x" onClick={this.menuToggle}></i>
                    <div className="narrowLinks">
                        <a href="#" onClick={this.burgerToggle}>Calendar</a>
                        <a href="#" onClick={this.burgerToggle}>Notes</a>
                        <a href="#" onClick={this.burgerToggle}>Todo</a>
                    </div>
                </div>
            </nav>
        );
    }
    menuToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
};

export default NavComponent;
