import React, {Component} from 'react';
import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import '../css/Datepicker.css';

class Datepicker extends Component {
    componentDidMount() {
        $(this.refs.datepicker).datepicker({
            dateFormat: "dd-mm-yy"
        });
        $(this.refs.datepicker).datepicker('setDate', this.props.defaultValue);
        $(this.refs.datepicker).datepicker({
            onSelect: function (d,i) {
                if(d !== i.lastVal){
                    $(this).change();
                }
            }
        });
        $(this.refs.datepicker).change(() => {
            this.props.change($(this.refs.datepicker).datepicker('getDate'));
        });
    }

    componentWillUnmount() {
        $(this.refs.datepicker).datepicker('destroy');
    }

    render() {
        return(
           <input className="datepicker" ref="datepicker" type="date" />
        );
    }
}

export default Datepicker;
