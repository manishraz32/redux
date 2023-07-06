import React from 'react';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer';
import "./App.css"

function App() {
  return (
    <div className="App">
        <HeaderContainer />
        <HomeContainer />
    </div>
  );
}

export default App;
