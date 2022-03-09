import ListItem from '../components/ListItem.js';

function ListContainer({bookings, removeBooking}) {

    const bookingsNodes = bookings.map((booking) => {
        return (
            <ListItem removeBooking={removeBooking} booking={booking} key={booking._id} />
        )
    });

    return ( 
        <>
            {bookingsNodes}
        </>
     );
}

export default ListContainer;