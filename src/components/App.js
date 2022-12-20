import React from 'react';
import './App.css';
import Header from './Header';
import Cv from './Cv';

class App extends React.Component {
  render() {
    return (
      <div  className='container'>
        <Header/>
        <Cv/>
      </div>
    )
  }
}

export default App;
