import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      {/* <h1>Bookverse</h1> */}
      <BrowserRouter>
        <Home />
        {/* <Navbar />
        <Card /> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
