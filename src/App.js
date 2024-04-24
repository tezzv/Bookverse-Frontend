import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/navbar/Navbar';
// import Card from './components/card/Card';
import Home from './components/home/Home';
import BookUpload from './components/Dashboard/BookUpload';
import BookState from './context/BookState';
import BookDetail from './components/BookDetail/BookDetail';
import Testpayment from './components/payment/Testpayment';
import PaymentStatus from './components/payment/PaymentStatus';

function App() {
  return (
    <div className="App">
      <BookState>

        <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard/uploadbook" element={<BookUpload />} />
            <Route exact path="/bookdetail/:bookID" element={<BookDetail />} />
            <Route exact path="/testpayment" element={<Testpayment />} />
            <Route exact path="/status/:orderId" element={<PaymentStatus />} />
          </Routes>

        </BrowserRouter>

      </BookState>
    </div>
  );
}

export default App;
