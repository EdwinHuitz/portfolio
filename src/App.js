import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Primary from './pages/primary'
export default function App() {
  
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/"><Primary /></Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}