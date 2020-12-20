import './App.css';
import Nav from './components/navbar'
import Footer from './components/footer'
import Portfolio from './pages/portfolio'
function App() {
  return (
    <div className="App">
      <Nav />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
