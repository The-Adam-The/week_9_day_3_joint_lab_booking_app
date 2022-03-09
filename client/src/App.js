import MainContainer from './containers/MainContainer';
import {getBookings} from './BookingsService';
import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings()
      .then((bookings) => setBookings(bookings));
  }, []);

  return (
    <>
      <MainContainer bookings={bookings} />
    </>
  );
}

export default App;
