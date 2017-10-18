import React, {Component} from 'react';
import '../css/Navbar.css';

class NavComponent extends Component{
    constructor(props) {
        super(props);
        this.setDisplay = this.setDisplay.bind(this);
        this.setMobileDisplay = this.setMobileDisplay.bind(this);
        this.menuToggle = this.menuToggle.bind(this);
    }

    // Setting to display only the page clicked
    setDisplay(event) {
        let name = event.target.name;
        const display = {
            displayCalendar: false,
            displayNotes: false,
            displayTodo: false,
            displayHome: false,
            [name]: true
        };
        this.props.setDisplay(display);
    }

    // Function for switching between mobile and desktop version
    setMobileDisplay(event) {
        this.setDisplay(event);
        this.menuToggle();
    }

    menuToggle() {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }

    render() {
        return (
            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <a href="#Home" name="displayHome" onClick={(e) => this.setDisplay(e)} ><i className="fa fa-home" />Home</a>
                        <a href="#Calendar" name="displayCalendar" onClick={(e) => this.setDisplay(e)} ><i className="fa fa-calendar" /> Calendar</a>
                        <a href="#Notes" name="displayNotes" onClick={(e) => this.setDisplay(e)} ><i className="fa fa-sticky-note" /> Notes</a>
                        <a href="#Todo" name="displayTodo" onClick={(e) => this.setDisplay(e)} ><i className="fa fa-list-ul" /> Todo</a>
                    </div>
                </div>
                <div className="navNarrow">
                    <i className="fa fa-bars fa-2x" onClick={this.menuToggle} />
                    <div className="narrowLinks">
                        <a href="#Home" name="displayHome" onClick={(e) => this.setMobileDisplay(e)}>Home</a>
                        <a href="#Calendar" name="displayCalendar" onClick={(e) => this.setMobileDisplay(e)}>Calendar</a>
                        <a href="#Notes" name="displayNotes" onClick={(e) => this.setMobileDisplay(e)}>Notes</a>
                        <a href="#Todo" name="displayTodo" onClick={(e) => this.setMobileDisplay(e)}>Todo</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavComponent;
