import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      errors: null,
      loading: false
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </p>
        </header>
      </div>
    )
  }
}

export default App;