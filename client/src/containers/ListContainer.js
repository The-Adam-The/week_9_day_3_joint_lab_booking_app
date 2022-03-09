import ListItem from '../components/ListItem.js';

function ListContainer({bookings}) {

    const bookingsNodes = bookings.map((booking) => {
        return (
            <ListItem booking={booking} key={booking._id} />
        )
    });

    return ( 
        <>
            {bookingsNodes}
        </>
     );
}

export default ListContainer;