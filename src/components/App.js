import React from 'react';
import './App.css';
import Header from './UI/Header';
import Cv from './Cv';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <Cv/>
      </div>
    )
  }
}

export default App;