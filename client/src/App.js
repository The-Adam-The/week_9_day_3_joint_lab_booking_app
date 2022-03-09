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
  
  const removeBooking = (id) => {

    const newBookings = bookings.filter((booking) => {
      return booking._id !== id
    })
    setBookings(newBookings)
  }

  return (
    <>
      <MainContainer removeBooking={removeBooking} bookings={bookings}  />
    </>
  );
}

export default App;
