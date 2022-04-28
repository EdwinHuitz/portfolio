import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/navbar'
import Primary from './pages/primary'
// import Shopping from './pages/shopping/shopping'
export default function App() {
  
  return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/"><Primary /></Route>
            {/* <Route path="/shopping"><Shopping /></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
  );
}