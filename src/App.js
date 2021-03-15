import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/navbar'
import Portfolio from './pages/portfolio'
import Weather from './pages/weather/weather'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/"><Portfolio/></Route>
          <Route path="/weather"><Weather/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
