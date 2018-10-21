import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './UserOutput/UserOutput.css';
import './App.css';

class App extends Component {
  state = {
    name : 'Prafullkumar Gaikwad',
    age : 28
  }

  changeNameHandler = (event) => {
    this.setState({
      name : event.target.value
    })

  }
  render() {

    const style = {
      
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        
    
    }
    return (
      <div className="App">
       <h1>My First Assignment in React js !</h1>
       <UserOutput  name={this.state.name} age={this.state.age}/>
       <UserInput style={style} name={this.state.name} changeName={this.changeNameHandler}/>
      </div>
    );
  }
}

export default App;
