import React,{Component} from "react";
import "../css/ToDo.css";
import List from "./List";

//Bruker funksjonalitet fra Component
class ToDo extends Component{
  constructor(props){
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  //Funksjon, når en endring skjer - hent verdi
  onChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  //Når man submitter - tømmer form-input og legger til ny input
  onSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  };

  //HTML skrives her
  render(){
    return(
      <div className="ToDo">
        <div className="header"><span>Todo List</span></div>
        <div className="wrap-list">
          <form onSubmit = {this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange}/>
            <button>submit</button>
          </form>
          <List items ={this.state.items}/>
          </div>
      </div>
    );
  }

};

export default ToDo;
